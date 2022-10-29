import {
	BadRequestException,
	ForbiddenException,
	forwardRef,
	Inject,
	Injectable,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UsersService } from '../users/users.service'
import { ConfigService } from '@nestjs/config'
import { CreateUserInput } from '../users/dto/create-user.input'
import * as argon2 from 'argon2'
import { AuthInput } from './dto/auth.input'
import { UpdateUserInput } from '../users/dto/update-user.input'
import { AuthOutputInput } from './dto/auth-output.input'

@Injectable()
export class AuthService {
	constructor(
		private userService: UsersService,
		private jwtService: JwtService,
		private configService: ConfigService
	) {}

	async signUp(createUserInput: CreateUserInput): Promise<any> {
		const userExist = await this.userService.findOneByEmail(
			createUserInput.email
		)

		if (userExist) {
			throw new BadRequestException('User already exists')
		}

		const hash = await this.hashData(createUserInput.password)
		const newUser = await this.userService.create({
			...createUserInput,
			password: hash,
		})

		const tokens = await this.getTokens(newUser.id, newUser.email)
	}

	async signIn(data: AuthInput): Promise<AuthOutputInput> {
		const user = await this.userService.findOneByEmail(data.email)

		if (!user) {
			throw new BadRequestException('Bad credentials')
		}

		const passwordMatches = await argon2.verify(
			user.password,
			data.password
		)

		if (!passwordMatches) {
			throw new BadRequestException('Bad credentials')
		}

		const tokens = await this.getTokens(user.id, user.email)
		await this.updateRefreshToken(user.id, tokens.refreshToken)

		return tokens
	}

	async logout(userId: number) {
		return this.userService.update({
			id: userId,
			refreshToken: '',
		})
	}

	async refreshToken(
		userId: number,
		refreshToken: string
	): Promise<AuthOutputInput> {
		const user = await this.userService.findOne(userId)

		if (!user || !user.refreshToken) {
			throw new ForbiddenException('Access Denied')
		}

		const refreshTokenMatches = await argon2.verify(
			user.refreshToken,
			refreshToken
		)

		if (!refreshTokenMatches) {
			throw new ForbiddenException('Access Denied')
		}

		const tokens = await this.getTokens(user.id, user.email)
		await this.updateRefreshToken(user.id, tokens.refreshToken)

		return tokens
	}

	private async hashData(data: string): Promise<string> {
		return await argon2.hash(data)
	}

	private async updateRefreshToken(userId: number, refreshToken: string) {
		const hashedRefreshToken = await this.hashData(refreshToken)
		await this.userService.update({
			id: userId,
			refreshToken: hashedRefreshToken,
		} as UpdateUserInput)
	}

	private async getTokens(userId: number, email: string) {
		const [accessToken, refreshToken] = await Promise.all([
			this.jwtService.signAsync(
				{
					sub: userId,
					email,
				},
				{
					secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
					expiresIn: '15m',
				}
			),
			this.jwtService.signAsync(
				{
					sub: userId,
					email,
				},
				{
					secret: this.configService.get<string>(
						'JWT_REFRESH_SECRET'
					),
					expiresIn: '7d',
				}
			),
		])

		return {
			accessToken,
			refreshToken,
		}
	}
}

// export class AuthService {
// 	constructor(
// 		@Inject(forwardRef(() => UsersService))
// 		private usersService: UsersService,
// 		private jwtService: JwtService
// 	) {}
//
// 	async validateUser(email: string, password: string): Promise<any> {
// 		const user = await this.usersService.findOneByEmail(email)
//
// 		if (user) {
// 			if (await compare(password, user.password)) {
// 				return user
// 			}
// 		}
//
// 		return null
// 	}
//
// 	async generateUserCredentials(user: UserEntity) {
// 		const payload = {
// 			email: user.email,
// 			name: user.name,
// 			sub: user.id,
// 		}
//
// 		return {
// 			access_token: this.jwtService.sign(payload),
// 		}
// 	}
// }

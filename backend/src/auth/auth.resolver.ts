import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { UserEntity } from '../users/entities/user.entity'
import { AuthInput } from './dto/auth.input'
import { AuthOutputInput } from './dto/auth-output.input'
import { Public } from '../config/decorators/public-decorator'
import { Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { RefreshTokenGuard } from './guards/refresh-token.guard'

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => AuthOutputInput)
	@Public()
	async signIn(
		@Args('authData') authData: AuthInput
	): Promise<AuthOutputInput> {
		return await this.authService.signIn(authData)
	}

	@Query(() => AuthOutputInput)
	@UseGuards(RefreshTokenGuard)
	@Public()
	async tokenRefresh(@Context() ctx: any): Promise<AuthOutputInput> {
		const userId: any = ctx?.req?.user?.['sub']
		const refreshToken: any = ctx?.req?.user?.['refreshToken']

		return await this.authService.refreshToken(userId, refreshToken)
	}

	@Query(() => UserEntity)
	async logout(@Context() ctx: any): Promise<UserEntity | null> {
		return await this.authService.logout(ctx.req?.user?.['sub'])
	}
}

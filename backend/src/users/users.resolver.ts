import {
	Args,
	InputType,
	Int,
	Mutation,
	Query,
	Resolver,
} from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CreateUserInput } from './dto/create-user.input'
import { UserEntity } from './entities/user.entity'

import * as argon2 from 'argon2'
import { Public } from '../config/decorators/public-decorator'

@Resolver('User')
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Mutation(() => UserEntity)
	@Public()
	async createUser(
		@Args('createUser') createUserInput: CreateUserInput
	): Promise<UserEntity> {
		const { password } = createUserInput
		const passwordHashed = await argon2.hash(password)

		return await this.usersService.create({
			...createUserInput,
			password: passwordHashed,
		})
	}

	@Query(() => [UserEntity])
	async findAllUsers(): Promise<UserEntity[]> {
		return await this.usersService.findAll()
	}

	@Query(() => UserEntity)
	async findOneUser(@Args('id', { type: () => Int }) id: number) {
		return await this.usersService.findOne(id)
	}
}

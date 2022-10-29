import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateUserInput } from './dto/create-user.input'
import { UserEntity } from './entities/user.entity'
import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	) {}

	async create(createUserInput: CreateUserInput): Promise<UserEntity> {
		return await this.userRepository.save({ ...createUserInput })
	}

	async findAll(): Promise<UserEntity[]> {
		return await this.userRepository.find()
	}

	async findOne(id: number): Promise<UserEntity | null> {
		return await this.userRepository.findOne({ where: { id } })
	}

	async findOneByEmail(email: string): Promise<UserEntity | null> {
		return await this.userRepository.findOneBy({ email })
	}

	async update(updateUserInput: UpdateUserInput): Promise<UserEntity | null> {
		await this.userRepository.update(
			{
				id: updateUserInput.id,
			},
			{ ...updateUserInput }
		)

		return await this.findOne(updateUserInput.id)
	}
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateColorInput } from './dto/create-color.input'
import { UpdateColorInput } from './dto/update-color.input'
import { ColorEntity } from './entities/color.entity'

@Injectable()
export class ColorsService {
	constructor(
		@InjectRepository(ColorEntity)
		private colorRepository: Repository<ColorEntity>
	) {}

	async create(createColorInput: CreateColorInput): Promise<ColorEntity> {
		return await this.colorRepository.save({ ...createColorInput })
	}

	async findAll(): Promise<ColorEntity[]> {
		return await this.colorRepository.find()
	}

	async findOne(id: number): Promise<ColorEntity> {
		return await this.colorRepository.findOneByOrFail({ id })
	}

	async update(updateColorInput: UpdateColorInput): Promise<ColorEntity> {
		await this.colorRepository.update(
			{
				id: updateColorInput.id,
			},
			{ ...updateColorInput }
		)

		return this.colorRepository.findOneByOrFail({ id: updateColorInput.id })
	}

	async remove(id: number): Promise<number> {
		await this.colorRepository.delete(id)

		return id
	}
}

import { Injectable } from '@nestjs/common'
import { CreateSizeInput } from './dto/create-size.input'
import { UpdateSizeInput } from './dto/update-size.input'
import { Repository } from 'typeorm'
import { SizeEntity } from './entities/size.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class SizesService {
	constructor(
		@InjectRepository(SizeEntity)
		private sizeRepository: Repository<SizeEntity>
	) {}

	async create(createSizeInput: CreateSizeInput): Promise<SizeEntity> {
		return await this.sizeRepository.save({ ...createSizeInput })
	}

	async findAll(): Promise<SizeEntity[]> {
		return await this.sizeRepository.find({ relations: ['products'] })
	}

	async findOne(id: number): Promise<SizeEntity> {
		return await this.sizeRepository.findOneByOrFail({ id })
	}

	async update(updateSizeInput: UpdateSizeInput): Promise<SizeEntity> {
		await this.sizeRepository.update(
			{ id: updateSizeInput.id },
			{ ...updateSizeInput }
		)

		return await this.sizeRepository.findOneByOrFail({
			id: updateSizeInput.id,
		})
	}

	async remove(id: number): Promise<number> {
		await this.sizeRepository.delete(id)

		return id
	}
}

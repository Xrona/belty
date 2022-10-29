import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CategoryEntity } from './entities/category.entity'
import { Repository } from 'typeorm'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'

@Injectable()
export class CategoriesService {
	constructor(
		@InjectRepository(CategoryEntity)
		private categoryRepository: Repository<CategoryEntity>
	) {}

	async create(
		createCategoryInput: CreateCategoryInput
	): Promise<CategoryEntity> {
		return await this.categoryRepository.save({ ...createCategoryInput })
	}

	async findAll(): Promise<CategoryEntity[]> {
		return await this.categoryRepository.find({
			relations: ['products'],
		})
	}

	async findOne(id: number): Promise<CategoryEntity | null> {
		return await this.categoryRepository.findOne({ where: { id } })
	}

	async update(
		updateCategoryInput: UpdateCategoryInput
	): Promise<CategoryEntity | null> {
		await this.categoryRepository.update(
			{
				id: updateCategoryInput.id,
			},
			{ ...updateCategoryInput }
		)

		return await this.categoryRepository.findOne({
			where: { id: updateCategoryInput.id },
		})
	}

	async remove(id: number): Promise<number> {
		await this.categoryRepository.delete(id)

		return id
	}
}

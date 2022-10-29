import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoriesService } from './categories.service'
import { CategoryEntity } from './entities/category.entity'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'

@Resolver('Category')
export class CategoriesResolver {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Mutation(() => CategoryEntity)
	async createCategory(
		@Args('createCategory') createCategoryInput: CreateCategoryInput
	): Promise<CategoryEntity> {
		return await this.categoriesService.create(createCategoryInput)
	}

	@Query(() => [CategoryEntity])
	async findAllCategories() {
		return await this.categoriesService.findAll()
	}

	@Query(() => CategoryEntity)
	async findOneCategory(
		@Args('id', { type: () => Int }) id: number
	): Promise<CategoryEntity | null> {
		return await this.categoriesService.findOne(id)
	}

	@Mutation(() => CategoryEntity)
	async updateCategory(
		@Args('updateCategory') updateCategoryInput: UpdateCategoryInput
	): Promise<CategoryEntity | null> {
		return await this.categoriesService.update(updateCategoryInput)
	}

	@Mutation(() => Number)
	async removeCategory(@Args('id', { type: () => Int }) id: number) {
		return await this.categoriesService.remove(id)
	}
}

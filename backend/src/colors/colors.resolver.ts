import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ColorsService } from './colors.service'
import { ColorEntity } from './entities/color.entity'
import { CreateColorInput } from './dto/create-color.input'
import { UpdateColorInput } from './dto/update-color.input'

@Resolver('Color')
export class ColorsResolver {
	constructor(private readonly colorsService: ColorsService) {}

	@Mutation(() => ColorEntity)
	async createColor(
		@Args('createColorInput') createColorInput: CreateColorInput
	): Promise<ColorEntity> {
		return await this.colorsService.create(createColorInput)
	}

	@Query(() => [ColorEntity])
	async findAllColors(): Promise<ColorEntity[]> {
		return await this.colorsService.findAll()
	}

	@Query(() => ColorEntity)
	async findOneColor(
		@Args('id', { type: () => Int }) id: number
	): Promise<ColorEntity> {
		return await this.colorsService.findOne(id)
	}

	@Mutation(() => ColorEntity)
	async updateColor(
		@Args('updateColorInput') updateColorInput: UpdateColorInput
	): Promise<ColorEntity> {
		return await this.colorsService.update(updateColorInput)
	}

	@Mutation(() => ColorEntity)
	async removeColor(
		@Args('id', { type: () => Int }) id: number
	): Promise<number> {
		return await this.colorsService.remove(id)
	}
}

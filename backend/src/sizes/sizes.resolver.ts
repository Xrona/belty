import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { SizesService } from './sizes.service'
import { SizeEntity } from './entities/size.entity'
import { CreateSizeInput } from './dto/create-size.input'
import { UpdateSizeInput } from './dto/update-size.input'

@Resolver('Size')
export class SizesResolver {
	constructor(private readonly sizesService: SizesService) {}

	@Mutation(() => SizeEntity)
	async createSize(
		@Args('createSizeInput') createSizeInput: CreateSizeInput
	): Promise<SizeEntity> {
		return await this.sizesService.create(createSizeInput)
	}

	@Query(() => [SizeEntity])
	async findAllSizes(): Promise<SizeEntity[]> {
		return await this.sizesService.findAll()
	}

	@Query(() => SizeEntity)
	findOneSize(@Args('id', { type: () => Int }) id: number) {
		return this.sizesService.findOne(id)
	}

	@Mutation(() => SizeEntity)
	updateSize(@Args('updateSizeInput') updateSizeInput: UpdateSizeInput) {
		return this.sizesService.update(updateSizeInput)
	}

	@Mutation(() => SizeEntity)
	removeSize(@Args('id', { type: () => Int }) id: number) {
		return this.sizesService.remove(id)
	}
}

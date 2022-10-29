import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ProductsService } from './products.service'
import { ProductEntity } from './entities/product.entity'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'
import { QueryProductInput } from './dto/query-product.input'
import { Public } from '../config/decorators/public-decorator'

@Resolver('Product')
export class ProductsResolver {
	constructor(private readonly productsService: ProductsService) {}

	@Mutation(() => ProductEntity)
	async createProduct(
		@Args('createProduct') createProductInput: CreateProductInput
	): Promise<ProductEntity> {
		return await this.productsService.create(createProductInput)
	}

	@Query(() => [ProductEntity])
	async findAllProducts(
		@Args('queryProduct', { nullable: true })
		queryProduct: QueryProductInput
	) {
		return await this.productsService.findAll(queryProduct)
	}

	@Query(() => ProductEntity)
	async findOneProduct(@Args('id', { type: () => Int }) id: number) {
		return await this.productsService.findOne(id)
	}

	@Mutation(() => ProductEntity)
	async updateProduct(
		@Args('updateProduct') updateProductInput: UpdateProductInput
	): Promise<ProductEntity | null> {
		return await this.productsService.update(updateProductInput)
	}

	@Mutation(() => Number)
	async removeProduct(@Args('id') id: number): Promise<number> {
		return await this.productsService.remove(id)
	}
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, SelectQueryBuilder } from 'typeorm'

import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'
import { ProductEntity } from './entities/product.entity'
import { QueryProductInput } from './dto/query-product.input'
import FilterQueryBuilder from '../config/filters/filter-query.builder'
import { SizeEntity } from '../sizes/entities/size.entity'
import { ColorEntity } from '../colors/entities/color.entity'

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(ProductEntity)
		private productRepository: Repository<ProductEntity>,
		@InjectRepository(SizeEntity)
		private sizeRepository: Repository<SizeEntity>,
		@InjectRepository(ColorEntity)
		private colorRepository: Repository<ColorEntity>
	) {}

	async create(
		createProductInput: CreateProductInput
	): Promise<ProductEntity> {
		const {
			sizes: sizeIds,
			colors: colorIds,
			...product
		} = createProductInput

		const sizes: SizeEntity[] = []
		const colors: ColorEntity[] = []

		for (const id of sizeIds) {
			sizes.push(await this.sizeRepository.findOneByOrFail({ id }))
		}

		for (const id of colorIds) {
			colors.push(await this.colorRepository.findOneByOrFail({ id }))
		}

		return await this.productRepository.save({
			...product,
			sizes,
			colors,
		})
	}

	async findAll(query: QueryProductInput | null): Promise<ProductEntity[]> {
		const fqb = new FilterQueryBuilder<ProductEntity>(
			this.productRepository,
			query?.filters
		)
		const qb: SelectQueryBuilder<ProductEntity> = fqb.build()

		return await qb
			.leftJoinAndSelect('ProductEntity.category', 'CategoryEntity')
			.leftJoinAndSelect('ProductEntity.colors', 'ColorEntity')
			.leftJoinAndSelect('ProductEntity.sizes', 'SizeEntity')
			.getMany()

		// let builder = this.productRepository.createQueryBuilder('product')
		//
		// if (query?.minPrice) {
		// 	builder = builder.andWhere('product.price >= :minPrice', {
		// 		minPrice: query?.minPrice,
		// 	})
		// }
		//
		// if (query?.maxPrice) {
		// 	builder = builder.andWhere('product.price <= :maxPrice', {
		// 		maxPrice: query?.maxPrice,
		// 	})
		// }
		//
		// if (query?.categoryId) {
		// 	builder = builder.andWhere('product.categoryId = :categoryId', {
		// 		categoryId: query?.categoryId,
		// 	})
		// }
		//
		// return await builder.getMany()
	}

	async findOne(id: number): Promise<ProductEntity | null> {
		return await this.productRepository.findOne({
			where: { id },
			relations: ['sizes', 'colors', 'category'],
		})
	}

	async update(
		updateProductInput: UpdateProductInput
	): Promise<ProductEntity | null> {
		await this.productRepository.update(
			{
				id: updateProductInput.id,
			},
			{ ...updateProductInput }
		)

		return await this.findOne(updateProductInput.id)
	}

	async remove(id: number): Promise<number> {
		await this.productRepository.delete(id)

		return id
	}
}

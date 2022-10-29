import { Column, Entity, OneToMany } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity } from '../../common/entities/base-entity'
import { ProductEntity } from '../../products/entities/product.entity'

@ObjectType()
@Entity('categories')
export class CategoryEntity extends BaseEntity {
	@Field()
	@Column()
	name: string

	@Field({ defaultValue: false })
	@Column({ default: false })
	hidden: boolean

	@OneToMany((type) => ProductEntity, (product) => product.category)
	@Field(() => [ProductEntity])
	products: ProductEntity[]
}

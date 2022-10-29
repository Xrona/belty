import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseEntity } from '../../common/entities/base-entity'
import { CategoryEntity } from '../../categories/entities/category.entity'
import { SizeEntity } from '../../sizes/entities/size.entity'
import { ColorEntity } from '../../colors/entities/color.entity'

@ObjectType()
@Entity('products')
export class ProductEntity extends BaseEntity {
	@Field()
	@Column()
	name: string

	@Field({ defaultValue: 0 })
	@Column({ default: 0 })
	price: number

	@Field({ nullable: true })
	@Column({ nullable: true })
	article: string

	@ManyToOne((type) => CategoryEntity, (category) => category.products)
	@Field({ nullable: true })
	category: CategoryEntity

	@Field()
	@Column()
	categoryId: number

	@ManyToMany((type) => SizeEntity, (size) => size.products, {
		cascade: false,
	})
	@Field(() => [SizeEntity])
	@JoinTable({
		name: 'size_product',
		joinColumn: { name: 'productId', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'sizeId', referencedColumnName: 'id' },
	})
	sizes: SizeEntity[]

	@ManyToMany((type) => ColorEntity, (color) => color.products, {
		cascade: false,
	})
	@JoinTable({
		name: 'color_product',
		joinColumn: { name: 'productId', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'colorId', referencedColumnName: 'id' },
	})
	@Field(() => [ColorEntity])
	colors: ColorEntity[]
}

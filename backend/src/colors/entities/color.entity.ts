import { ObjectType, Field, Int } from '@nestjs/graphql'
import { BaseEntity } from '../../common/entities/base-entity'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { ProductEntity } from '../../products/entities/product.entity'

@ObjectType()
@Entity('colors')
export class ColorEntity extends BaseEntity {
	@Column()
	@Field()
	name: string

	@Column()
	@Field()
	value: string

	@Column({ default: false })
	@Field({ defaultValue: false })
	hidden: boolean

	@Field(() => [ProductEntity])
	@ManyToMany((type) => ProductEntity, (product) => product.colors, {
		cascade: false,
	})
	@JoinTable({
		name: 'color_product',
		joinColumn: { name: 'colorId', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'productId', referencedColumnName: 'id' },
	})
	products: ProductEntity[]
}

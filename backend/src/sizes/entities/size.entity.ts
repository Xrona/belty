import { ObjectType, Field } from '@nestjs/graphql'
import { BaseEntity } from '../../common/entities/base-entity'
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { ProductEntity } from '../../products/entities/product.entity'

@ObjectType()
@Entity('sizes')
export class SizeEntity extends BaseEntity {
	@Field()
	@Column()
	name: string

	@Field({ defaultValue: false })
	@Column({ default: false })
	hidden: boolean

	@ManyToMany((type) => ProductEntity, (product) => product.sizes, {
		cascade: false,
	})
	@Field(() => [ProductEntity])
	@JoinTable({
		name: 'size_product',
		joinColumn: { name: 'sizeId', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'productId', referencedColumnName: 'id' },
	})
	products: ProductEntity[]
}

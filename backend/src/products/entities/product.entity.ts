import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	DeepPartial,
} from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity()
export class ProductEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number

	@Field()
	@Column()
	name: string

	@Field({ defaultValue: 0 })
	@Column({ default: 0 })
	price: number

	@Field({ nullable: true })
	@Column({ nullable: true })
	article: string

	@Field()
	@CreateDateColumn()
	createdAt: Date

	@Field()
	@UpdateDateColumn()
	updatedAt: Date
}

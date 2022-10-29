import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { BaseEntity } from '../../common/entities/base-entity'

@ObjectType()
@Entity('users')
export class UserEntity extends BaseEntity {
	@Field()
	@Column()
	email: string

	@Field()
	@Column()
	name: string

	@Field()
	@Column()
	password: string

	@Field({ nullable: true })
	@Column({
		type: String,
		nullable: true,
		unique: true,
	})
	refreshToken: string
}

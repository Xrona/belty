import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput {
	@Field(() => Int)
	id: number

	@Field({ nullable: true })
	email?: string

	@Field({ nullable: true })
	name?: string

	@Field({ nullable: true })
	password?: string

	@Field({ nullable: true })
	refreshToken?: string
}

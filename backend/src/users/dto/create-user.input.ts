import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
	@Field()
	email: string

	@Field()
	name: string

	@Field()
	password: string

	@Field({ nullable: true })
	refreshToken?: string
}

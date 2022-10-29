import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AuthOutputInput {
	@Field(() => String)
	accessToken: string

	@Field(() => String)
	refreshToken: string
}

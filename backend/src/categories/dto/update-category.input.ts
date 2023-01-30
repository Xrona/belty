import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateCategoryInput {
	@Field(() => Int)
	id: number

	@Field({ nullable: true })
	name: string

	@Field({ nullable: true })
	hidden: boolean
}

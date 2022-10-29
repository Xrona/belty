import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateColorInput {
	@Field()
	name: string

	@Field()
	value: string

	@Field({ defaultValue: false })
	hidden: boolean
}

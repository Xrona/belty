import { CreateColorInput } from './create-color.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateColorInput {
	@Field(() => Int)
	id: number

	@Field({ nullable: true })
	name: string

	@Field({ nullable: true })
	value: string

	@Field({ nullable: true })
	hidden: boolean
}

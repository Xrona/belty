import { CreateProductInput } from './create-product.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateProductInput {
	@Field(() => Int)
	id: number

	@Field({ nullable: true })
	name: string

	@Field({ nullable: true })
	price: number

	@Field({ nullable: true })
	article: string

	@Field({ nullable: true })
	categoryId: number
}

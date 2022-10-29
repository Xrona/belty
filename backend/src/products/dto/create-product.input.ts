import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateProductInput {
	@Field()
	name: string

	@Field({ defaultValue: 0 })
	price: number

	@Field({ nullable: true })
	article: string

	@Field()
	categoryId: number

	@Field(() => [Number], {
		nullable: true,
	})
	sizes: [number]

	@Field(() => [Number], {
		nullable: true,
	})
	colors: [number]
}

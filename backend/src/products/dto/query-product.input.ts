import { Field, InputType } from '@nestjs/graphql'
import { FilterExpression } from '../../config/filters/filters.dto'

@InputType()
export class QueryProductInput {
	// @Field({ nullable: true })
	// categoryId?: number
	//
	// @Field({ nullable: true })
	// minPrice?: number
	//
	// @Field({ nullable: true })
	// maxPrice?: number

	@Field((type) => FilterExpression, { nullable: true })
	filters?: FilterExpression
}

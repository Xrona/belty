import { Field, InputType, registerEnumType } from '@nestjs/graphql'

enum Operator {
	AND = 'AND',
	OR = 'OR',
}

export enum Operation {
	EQ = 'EQ',
	IN = 'IN',
	LIKE = 'LIKE',
	GE = 'GE',
	LE = 'LE',
}

registerEnumType(Operator, {
	name: 'Operator',
})

registerEnumType(Operation, {
	name: 'Operation',
})

@InputType()
export class Filter {
	@Field(() => Operation)
	op: Operation

	@Field(() => [String])
	values: [string]

	@Field()
	field: string

	@Field({ nullable: true, defaultValue: null })
	relationField?: string
}

@InputType()
export class FilterExpression {
	@Field(() => Operator)
	operator: Operator

	@Field(() => [Filter])
	filters: [Filter]

	@Field(() => [FilterExpression], { nullable: true, defaultValue: null })
	childExpressions?: [FilterExpression]
}

import { ObjectLiteral, Repository, SelectQueryBuilder } from 'typeorm'
import { FilterExpression } from './filters.dto'
import JoinBuilder from './join.builder'
import WhereBuilder from './where.builder'

export default class FilterQueryBuilder<Entity extends ObjectLiteral> {
	private readonly qb: SelectQueryBuilder<Entity>

	constructor(
		entityRepository: Repository<Entity>,
		private filtersExpression?: FilterExpression
	) {
		this.qb = entityRepository.createQueryBuilder()
	}

	build(): SelectQueryBuilder<Entity> {
		const jb = new JoinBuilder<Entity>(this.qb, this.filtersExpression)
		jb.build()

		const wb = new WhereBuilder(this.qb, this.filtersExpression)
		wb.build()

		return this.qb
	}
}

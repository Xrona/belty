import { SelectQueryBuilder } from 'typeorm'
import { FilterExpression } from './filters.dto'
import { forEach } from 'lodash'

export default class JoinBuilder<Entity> {
	private joinedEntities = new Set<string>()

	constructor(
		private readonly qb: SelectQueryBuilder<Entity>,
		private filtersExpression?: FilterExpression
	) {}

	build() {
		if (this.filtersExpression) {
			this.buildJoinEntitiesRec(this.filtersExpression)
		}
	}

	private buildJoinEntitiesRec(fe: FilterExpression) {
		forEach(fe.filters, (f) => this.addJoinEntity(f.field, f.relationField))
		forEach(fe.childExpressions, (child) =>
			this.buildJoinEntitiesRec(child)
		)
	}

	private addJoinEntity(field: string, relationField?: string) {
		const entityName = field.split('.')[0]

		if (relationField && !this.joinedEntities.has(entityName)) {
			this.qb.leftJoinAndSelect(relationField, entityName)
			this.joinedEntities.add(entityName)
		}
	}
}

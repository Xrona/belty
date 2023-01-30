import { Module } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsResolver } from './products.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ProductEntity } from './entities/product.entity'
import { SizeEntity } from '../sizes/entities/size.entity'
import { ColorEntity } from '../colors/entities/color.entity'

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductEntity, SizeEntity, ColorEntity]),
	],
	providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}

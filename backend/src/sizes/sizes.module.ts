import { Module } from '@nestjs/common'
import { SizesService } from './sizes.service'
import { SizesResolver } from './sizes.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SizeEntity } from './entities/size.entity'

@Module({
	imports: [TypeOrmModule.forFeature([SizeEntity])],
	providers: [SizesResolver, SizesService],
})
export class SizesModule {}

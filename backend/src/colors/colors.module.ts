import { Module } from '@nestjs/common'
import { ColorsService } from './colors.service'
import { ColorsResolver } from './colors.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ColorEntity } from './entities/color.entity'

@Module({
	imports: [TypeOrmModule.forFeature([ColorEntity])],
	providers: [ColorsResolver, ColorsService],
})
export class ColorsModule {}

import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { UsersResolver } from './users.resolver'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from '../auth/auth.module'

@Module({
	imports: [ConfigModule, AuthModule, TypeOrmModule.forFeature([UserEntity])],
	providers: [UsersService, UsersResolver],
	exports: [UsersService],
})
export class UsersModule {}

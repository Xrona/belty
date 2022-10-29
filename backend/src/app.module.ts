import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { ProductsModule } from './products/products.module'
import { ApolloDriver } from '@nestjs/apollo'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { APP_GUARD } from '@nestjs/core'
import { CategoriesModule } from './categories/categories.module'
import { SizesModule } from './sizes/sizes.module'
import { ColorsModule } from './colors/colors.module'
import { AccessTokenGuard } from './auth/guards/accessToken.guard'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		GraphQLModule.forRoot({
			driver: ApolloDriver,
			autoSchemaFile: 'schema.gql',
			sortSchema: true,
			playground: true,
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (config: ConfigService) => ({
				type: config.get<'aurora-data-api'>(
					'TYPEORM_CONNECTION'
				) as 'postgres',
				username: config.get<string>('TYPEORM_USERNAME'),
				password: config.get<string>('TYPEORM_PASSWORD'),
				database: config.get<string>('TYPEORM_DATABASE'),
				port: config.get<number>('TYPEORM_PORT'),
				entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
				synchronize: true,
				autoLoadEntities: true,
				logging: true,
			}),
		}),
		ProductsModule,
		AuthModule,
		UsersModule,
		CategoriesModule,
		SizesModule,
		ColorsModule,
	],
	controllers: [],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AccessTokenGuard,
		},
	],
})
export class AppModule {}

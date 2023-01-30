import { forwardRef, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { UsersModule } from '../users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AccessTokenStrategy } from './strategies/accessToken.strategy'
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy'
import { AuthResolver } from './auth.resolver'

@Module({
	imports: [
		ConfigModule,
		forwardRef(() => UsersModule),
		JwtModule.register({}),
		// JwtModule.registerAsync({
		// 	useFactory: (configService: ConfigService) => ({
		// 		secret: configService.get<string>('SECRET_KEY'),
		// 		signOptions: { expiresIn: '60s' },
		// 	}),
		// 	inject: [ConfigService],
		// }),
	],
	providers: [
		AuthService,
		AccessTokenStrategy,
		RefreshTokenStrategy,
		AuthResolver,
	],
	exports: [AuthService],
})
export class AuthModule {}

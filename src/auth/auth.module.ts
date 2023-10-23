import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { APP_GUARD } from '@nestjs/core';
import { localAuthGuard } from './local-auth.guard';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStradegy } from './jwt.stradegy';


@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET', //put in environment variables
    signOptions: {expiresIn: '60s'},
  })],

  providers: [AuthService, LocalStrategy, JwtStradegy],
  exports: [AuthService]
})
export class AuthModule {}

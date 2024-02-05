import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SecurityService } from '@security/service';
import {
  RefreshTokenPayload,
  SignInPayload,
  SignupPayload,
  Credential,
} from './model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '@common/config/metadata/public.metadata';
import { User } from '@common/config/metadata/user.metadata';
@ApiBearerAuth('access-token')
@ApiTags('Account')
@Controller('account')
export class SecurityController {
  constructor(private readonly service: SecurityService) {}
  @Public()
  @Post('signin')
  public signIn(@Body() payload: SignInPayload) {
    return this.service.signIn(payload);
  }
  @Public()
  @Post('admin-signin')
  public adminSignIn(@Body() payload: SignInPayload) {
    return this.service.signIn(payload);
  }
  @Public()
  @Post('signup')
  public signUp(@Body() payload: SignupPayload) {
    return this.service.signup(payload);
  }
  @Public()
  @Post('refresh')
  public refresh(@Body() payload: RefreshTokenPayload) {
    return this.service.refresh(payload);
  }
  @Get('me')
  public me(@User() user: Credential) {
    return user;
  }
  @Delete('delete/:id')
  public delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}

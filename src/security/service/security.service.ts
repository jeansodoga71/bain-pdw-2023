import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenService } from '@security/jwt/token.service';
import {
  CredentialDeleteException,
  MailAlreadyExistException,
  SignupException,
  UserAlreadyExistException,
  UserNotFoundException,
} from '@security/security.exception';
import { isNil } from 'lodash';
import {
  RefreshTokenPayload,
  SignInPayload,
  SignupPayload,
  Token,
  Credential,
} from '@security/model';
import { encryptPassword } from '@security/service/utils/ password.decoder';
import { Builder } from 'builder-pattern';

@Injectable()
export class SecurityService {
  constructor(
    @InjectRepository(Credential)
    private readonly repository: Repository<Credential>,
    private readonly tokenService: TokenService,
  ) {}

  async detail(id: string): Promise<Credential> {
    const result = await this.repository.findOneBy({ credential_id: id });
    if (!isNil(result)) {
      return result;
    }
    throw new UserNotFoundException();
  }

  async signIn(payload: SignInPayload): Promise<Token | null> {
    
    const result = await this.repository.findOneBy({
      username: payload.username,
    });
    if (!isNil(result)) {
      return await this.tokenService.getTokens(result);
    }
    throw new UserNotFoundException();
  }
  async signup(payload: SignupPayload): Promise<Token | null> {
    let result: Credential | null = await this.repository.findOneBy({
      username: payload.username,
    });
    if (!isNil(result)) {
      throw new UserAlreadyExistException();
    }

    if (!isNil(result)) {
      throw new MailAlreadyExistException();
    }
    try {
      const encryptedPassword = await encryptPassword(payload.password);
      await this.repository.save(
        Builder<Credential>()
          .username(payload.username)
          .password(encryptedPassword)
          .build(),
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const signInPayload: SignInPayload = { ...payload };
      return await this.signIn(signInPayload);
    } catch (e) {
      console.error(e);
      throw new SignupException();
    }
  }

  /*async signup(payload: SignupPayload): Promise<Credential | null> {
    const result: Credential | null = await this.repository.findOneBy({
      username: payload.username,
    });
    if (!isNil(result)) {
      throw new UserAlreadyExistException();
    }
    try {
      const encryptedPassword = await encryptPassword(payload.password);
      await this.repository.save(
        Builder<Credential>()
          .username(payload.username)
          .password(encryptedPassword)
          .mail(payload.mail)
          .build(),
      );
      const signInPayload: SignInPayload = {
        ...payload,
      return await this.signIn(signInPayload, false);
    } catch (e) {
      this.Logger.error(e.message);
      throw new SignupException();*/
  /*const encryptedPassword = await encryptPassword(payload.password);
      return this.repository.save(
        Builder<Credential>()
          .username(payload.username)
          .password(encryptedPassword)
          .mail(payload.mail)
          .build(),
      );
    } catch (e) {
      throw new SignupException();
    }
  }*/

  async refresh(payload: RefreshTokenPayload): Promise<Token | null> {
    return this.tokenService.refresh(payload);
  }

  async delete(id): Promise<void> {
    try {
      const detail = await this.detail(id);
      await this.tokenService.deleteFor(detail);
      await this.repository.remove(detail);
    } catch (e) {
      throw new CredentialDeleteException();
    }
  }
}

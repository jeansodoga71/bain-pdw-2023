/*import { ApiProperty } from '@nestjs/swagger';
export class SignupPayload {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  mail: string;
}*/
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column } from 'typeorm';

export class SignupPayload {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 10)
  username: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  mail: string;
}

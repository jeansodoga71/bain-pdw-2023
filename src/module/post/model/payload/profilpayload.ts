import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class ProfilPayload {

  @ApiProperty()
  @IsNotEmpty()
  ID_Utilisateur: number;
  @ApiProperty()
  @IsOptional()
  PhotoProfil: string;
  @ApiProperty()
  @IsOptional()
  Description: string;
  @ApiProperty()
  @IsOptional()
  Statut: string;
  @ApiProperty()
  @IsNotEmpty()
  Prenom: string;
  @ApiProperty()
  @IsNotEmpty()
  Nom: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  Email: string;
}

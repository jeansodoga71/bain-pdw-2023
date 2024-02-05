
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
export class CommentairePayload {
  @ApiProperty()
  @IsNotEmpty()
  ID_Utilisateur: number;
  @ApiProperty()
  @IsNotEmpty()
  ID_Publication: number;
  @ApiProperty()
  @IsNotEmpty()
  Contenu: string;
}

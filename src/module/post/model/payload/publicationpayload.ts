
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
export class PublicationPayload {
  @ApiProperty()
  @IsOptional()
  ID_Publication?: number;
  @ApiProperty()
  @IsNotEmpty()
  ID_Utilisateur: number;
  @ApiProperty()
  @IsOptional()
  @IsDateString()
  DatePublication: Date;
  @ApiProperty()
  @IsOptional()
  Contenu: string;
  @ApiProperty()
  @IsOptional()
  TypePublication: string;
}

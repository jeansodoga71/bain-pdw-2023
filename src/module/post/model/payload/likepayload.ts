
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';
export class LikePayload {
  @ApiProperty()
  @IsNotEmpty()
  ID_Utilisateur: number;
  @ApiProperty()
  @IsOptional()
  ID_Publication?: number;
  @ApiProperty()
  @IsOptional()
  ID_Commentaire?: number;
}

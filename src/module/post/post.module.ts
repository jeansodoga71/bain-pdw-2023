import { Module } from '@nestjs/common';
import { PublicationController } from './controller/publication.controller';
import { CommentaireController } from './controller/commentaire.controller';
import { LikeController } from './controller/like.controller';
import { LikeService } from './service/like.service';
import { PublicationService } from './service/publication.service';
import { CommentaireService } from './service/commentaire.service';
import { ProfilService } from './service/profil.service';
import { ProfilController } from './controller/profil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from './model/entity/publication.entity';
import { Profil } from './model/entity/profil.entity';
import { Commentaire } from './model/entity/commentaire.entity';
import { Like } from './model/entity/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Publication, Profil, Commentaire, Like])],
  controllers: [PublicationController, CommentaireController, LikeController, ProfilController],
  providers: [PublicationService, CommentaireService, LikeService, ProfilService]
})
export class PostModule {}

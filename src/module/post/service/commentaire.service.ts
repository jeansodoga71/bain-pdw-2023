import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commentaire } from '../model/entity/commentaire.entity';
import { CommentairePayload } from '../model/payload/commentairepayload';

@Injectable()
export class CommentaireService {
  constructor(
    @InjectRepository(Commentaire)
    private readonly commentaireRepository: Repository<Commentaire>,
  ) {}

  async trouverCommentaire(id: number): Promise<Commentaire> {
    const commentaire = await this.commentaireRepository.findOneBy({ID_Commentaire: id});
    if (!commentaire) {
      throw new NotFoundException('Commentaire non trouvé');
    }
    return commentaire;
  }

  async creerCommentaire(commentairePayload: CommentairePayload): Promise<Commentaire> {
    const nouveauCommentaire = this.commentaireRepository.create(commentairePayload);
    return await this.commentaireRepository.save(nouveauCommentaire);
  }

  async modifierCommentaire(id: number, commentairePayload: CommentairePayload): Promise<Commentaire> {
    await this.trouverCommentaire(id);
    await this.commentaireRepository.update(id, commentairePayload);
    return await this.commentaireRepository.findOneBy({ID_Commentaire: id});
  }

  async supprimerCommentaire(id: number): Promise<void> {
    await this.trouverCommentaire(id);
    await this.commentaireRepository.delete(id);
  }
}

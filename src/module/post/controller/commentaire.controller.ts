import { Controller, Get, Post, Body, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { CommentaireService } from '../service/commentaire.service';
import { CommentairePayload } from '../model/payload/commentairepayload';

@Controller('commentaires')
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  @Get(':id')
  async trouverCommentaire(@Param('id') id: number) {
    const commentaire = await this.commentaireService.trouverCommentaire(id);
    if (!commentaire) {
      throw new NotFoundException('Commentaire non trouvé');
    }
    return commentaire;
  }

  @Post()
  creerCommentaire(@Body() commentairePayload: CommentairePayload) {
    return this.commentaireService.creerCommentaire(commentairePayload);
  }

  @Put(':id')
  modifierCommentaire(@Param('id') id: number, @Body() commentairePayload: CommentairePayload) {
    return this.commentaireService.modifierCommentaire(id, commentairePayload);
  }

  @Delete(':id')
  supprimerCommentaire(@Param('id') id: number) {
    return this.commentaireService.supprimerCommentaire(id);
  }
}

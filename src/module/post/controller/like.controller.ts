import { Controller, Get, Post, Body, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { LikeService } from '../service/like.service';
import { LikePayload } from '../model/payload/likepayload';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get(':id')
  async trouverLike(@Param('id') id: number) {
    const like = await this.likeService.trouverLike(id);
    if (!like) {
      throw new NotFoundException('Like non trouvé');
    }
    return like;
  }

  @Post()
  creerLike(@Body() likePayload: LikePayload) {
    return this.likeService.creerLike(likePayload);
  }

  @Delete(':id')
  supprimerLike(@Param('id') id: number) {
    return this.likeService.supprimerLike(id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from '../model/entity/like.entity';
import { LikePayload } from '../model/payload/likepayload';
import { Builder } from 'builder-pattern';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
  ) {}

  async trouverLike(id: number): Promise<Like> {
    const like = await this.likeRepository.findOneBy({ID_Like: id});
    if (!like) {
      throw new NotFoundException('Like non trouvé');
    }
    return like;
  }

  async creerLike(likePayload: LikePayload): Promise<Like> {
    try {
      return await this.likeRepository.save(Builder<Like>()
          
          .build()
          );
      } catch (e) {
      // throw new MemberCreateException();
      }
  }


  async supprimerLike(id: number): Promise<void> {
    await this.trouverLike(id);
    await this.likeRepository.delete(id);
  }
}

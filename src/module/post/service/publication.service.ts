import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publication } from '../model/entity/publication.entity';
import { PublicationPayload } from '../model/payload/publicationpayload';

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(Publication)
    private readonly publicationRepository: Repository<Publication>,
  ) {}

  async trouverPublication(id: number): Promise<Publication> {
    const publication = await this.publicationRepository.findOneBy({ID_Publication: id});
    if (!publication) {
      throw new NotFoundException('Publication non trouvée');
    }
    return publication;
  }

  async creerPublication(publicationPayload: PublicationPayload): Promise<Publication> {
    const nouvellePublication = this.publicationRepository.create(publicationPayload);
    return await this.publicationRepository.save(nouvellePublication);
  }

  async modifierPublication(id: number, publicationPayload: PublicationPayload): Promise<Publication> {
    await this.trouverPublication(id);
    await this.publicationRepository.update(id, publicationPayload);
    return await this.publicationRepository.findOneBy({ID_Publication: id});
  }

  async supprimerPublication(id: number): Promise<void> {
    await this.trouverPublication(id);
    await this.publicationRepository.delete(id);
  }
}

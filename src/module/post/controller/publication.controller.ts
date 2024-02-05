import { Controller, Get, Post, Body, Delete, NotFoundException, Param, Put } from '@nestjs/common';
import { PublicationService } from '../service/publication.service';
import { PublicationPayload } from '../model/payload/publicationpayload';

@Controller('publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Get(':id')
  async trouverPublication(@Param('id') id: number) {
    const publication = await this.publicationService.trouverPublication(id);
    if (!publication) {
      throw new NotFoundException('Publication non trouvée');
    }
    return publication;
  }

  @Post()
  creerPublication(@Body() publicationPayload: PublicationPayload) {
    return this.publicationService.creerPublication(publicationPayload);
  }

  @Put(':id')
  modifierPublication(@Param('id') id: number, @Body() publicationPayload: PublicationPayload) {
    return this.publicationService.modifierPublication(id, publicationPayload);
  }

  @Delete(':id')
  supprimerPublication(@Param('id') id: number) {
    return this.publicationService.supprimerPublication(id);
  }
}
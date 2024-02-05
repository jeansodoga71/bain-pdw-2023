import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ProfilService } from '../service/profil.service';
import { ProfilPayload } from '../model/payload/profilpayload';

@Controller('profils')
export class ProfilController {
  constructor(private readonly profilService: ProfilService) {}

  @Get(':id')
  async trouverProfil(@Param('id') id: number) {
    const profil = await this.profilService.trouverProfil(id);
    if (!profil) {
      throw new NotFoundException('Profil non trouvé');
    }
    return profil;
  }

  @Post()
  creerProfil(@Body() profilPayload: ProfilPayload) {
    return this.profilService.creerProfil(profilPayload);
  }

  @Put(':id')
  modifierProfil(@Param('id') id: number, @Body() profilPayload: ProfilPayload) {
    return this.profilService.modifierProfil(id, profilPayload);
  }

  @Delete(':id')
  supprimerProfil(@Param('id') id: number) {
    return this.profilService.supprimerProfil(id);
  }
}

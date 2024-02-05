import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profil } from '../model/entity/profil.entity';
import { ProfilPayload } from '../model/payload/profilpayload';
import { Builder } from 'builder-pattern';

@Injectable()
export class ProfilService {
  constructor(
    @InjectRepository(Profil)
    private readonly profilRepository: Repository<Profil>,
  ) {}

  async trouverProfil(id: number): Promise<Profil> {
    const profil = await this.profilRepository.findOneBy({
        ID_Profil: id 
    });
    if (!profil) {
      throw new NotFoundException('Profil non trouvé');
    }
    return profil;
  }

  async creerProfil(profilPayload: ProfilPayload): Promise<Profil> {
    try {
        return await this.profilRepository.save(Builder<Profil>()
            .PhotoProfil(profilPayload.PhotoProfil)
            .Description(profilPayload.Description)
            .Statut(profilPayload.Statut)
            .Prenom(profilPayload.Prenom)
            .Nom(profilPayload.Nom)
            .Email(profilPayload.Email)
            .build()
            );
        } catch (e) {
        
        }
  }

  async modifierProfil(id: number, profilPayload: ProfilPayload): Promise<Profil> {
    try {
        let detail = await this.trouverProfil(id);
        detail.PhotoProfil = profilPayload.PhotoProfil;
        detail.Description = profilPayload.Description;
        detail.Prenom = profilPayload.Prenom;
        detail.Nom = profilPayload.Nom;
        detail.Email = profilPayload.Email;
        return await this.profilRepository.save(detail);
    } catch (e) {
        
    }
  }

  async supprimerProfil(id: number): Promise<void> {
    await this.trouverProfil(id); 
    await this.profilRepository.delete(id);
  }
}

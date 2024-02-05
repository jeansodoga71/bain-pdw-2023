import { Credential } from '@security/model';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Profil {
  @PrimaryGeneratedColumn()
  ID_Profil: number;

  @OneToOne(() => Credential)
  @JoinColumn({ name: 'credential_id' })
  ID_Utilisateur: Credential;

  @Column()
  PhotoProfil: string;

  @Column()
  Description: string;

  @Column()
  Statut: string;

  @Column()
  Prenom: string;

  @Column()
  Nom: string;

  @Column()
  Email: string;
}

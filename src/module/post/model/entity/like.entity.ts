import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Publication } from './publication.entity';
import { BaseEntity } from '@common/model/base.entity';
import { Commentaire } from './commentaire.entity';
import { Profil } from './profil.entity';

@Entity()
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID_Like: number;

  @ManyToOne(() => Profil)
  @JoinColumn({ name: 'ID_Profil' })
  profil: Profil;

  @ManyToOne(() => Publication)
  @JoinColumn({ name: 'ID_Publication' })
  publication: Publication;

  @ManyToOne(() => Commentaire)
  @JoinColumn({ name: 'ID_Commentaire' })
  commentaire: Commentaire;

  @Column()
  DateLike: Date;
}

import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Publication } from './publication.entity';
import { BaseEntity } from '@common/model/base.entity';
import { Profil } from './profil.entity';

@Entity()
export class Commentaire extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID_Commentaire: number;

  @ManyToOne(() => Profil)
  @JoinColumn({ name: 'ID_Profil' })
  profil: Profil;

  @ManyToOne(() => Publication)
  @JoinColumn({ name: 'ID_Publication' })
  publication: Publication;

  @Column()
  DateCommentaire: Date;

  @Column()
  Contenu: string;
}

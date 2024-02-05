import { Entity, PrimaryColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ulid } from "ulid";
import { Commentaire } from './commentaire.entity';
import { Like } from './like.entity';
import { Credential } from "@security/model";
import { BaseEntity } from "@common/model/base.entity";
import { Profil } from "./profil.entity";

@Entity()
export class Publication extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    ID_Publication: number;

    @ManyToOne(() => Profil)
    @JoinColumn({ name: 'ID_Utilisateur' })
    profil: Profil;

    @Column()
    DatePublication: Date;

    @Column()
    Contenu: string;

    @Column()
    TypePublication: string;

    @OneToMany(() => Commentaire, commentaire => commentaire.publication)
    commentaires: Commentaire[];

    @OneToMany(() => Like, like => like.publication)
    likes: Like[];
}
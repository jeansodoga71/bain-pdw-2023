import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
export class Credential {
  @PrimaryColumn('varchar', { length: 26, default: () => `'${ulid()}'` })
  credential_id: string;
  @Column({ nullable: false, unique: true })
  username: string;
  @Column({ nullable: true })
  password: string;

}

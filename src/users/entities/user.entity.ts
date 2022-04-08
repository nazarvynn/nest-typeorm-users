import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Gender } from '../enums';

@Entity('users') // Table name
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column('enum', { enum: Gender }) // Column type enum: Gender
  gender: Gender;
}

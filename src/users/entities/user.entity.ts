import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum Gender {
  MALE,
  FEMALE,
}

@Entity('users') // Table name
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column('enum', { enum: Gender }) // Column type enum: Gender
  gender: Gender;
}

/* eslint-disable prettier/prettier */
import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Bet } from 'src/bet/bet.entity';
import { hashPasswordTransform } from 'src/helpers/crypto';
// import { Role } from 'src/role/role.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  cpf: string;

  @Column('text')
  email: string;

  @Column({
    transformer: hashPasswordTransform
  })
  @HideField()
  password: string;
  
  @OneToMany(() => Bet, bets => bets.user)
  bets: Bet[];
  // roles: Role[]
}

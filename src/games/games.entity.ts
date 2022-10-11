/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  range: number;

  @Column()
  price: number;

  @Column()
  min_and_max_value: number;

  @Column()
  color: string;
}

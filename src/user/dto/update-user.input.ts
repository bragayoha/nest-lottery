/* eslint-disable prettier/prettier */
import { InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Campo de name obrigatório' })
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo de cpf obrigatório' })
  @IsOptional()
  cpf?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Campo de email obrigatório' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo de password obrigatório' })
  @IsOptional()
  password?: string;
}

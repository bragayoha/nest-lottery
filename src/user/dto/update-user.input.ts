/* eslint-disable prettier/prettier */
import { InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'CPF is required' })
  cpf?: string;

  @IsOptional()
  @IsEmail()
  @IsNotEmpty({ message: 'E-mail is required' })
  email?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password?: string;
}

/* eslint-disable prettier/prettier */
import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber, IsDecimal } from 'class-validator';

@InputType()
export class CreateGameInput {
  @IsString()
  @IsNotEmpty({ message: 'Type is required' })
  type: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Range is required' })
  range: number;

  @IsDecimal()
  @IsNotEmpty({ message: 'Price is required' })
  price: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Min and Max Value is required' })
  min_and_max_value: number;

  @IsString()
  @IsNotEmpty({ message: 'Color is required' })
  color: string;
}

/* eslint-disable prettier/prettier */
import { InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDecimal,
  IsOptional,
} from 'class-validator';

@InputType()
export class UpdateGameInput {
  @IsString()
  @IsNotEmpty({ message: 'Type is required' })
  @IsOptional()
  type?: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Range is required' })
  @IsOptional()
  range?: number;

  @IsDecimal()
  @IsNotEmpty({ message: 'Price is required' })
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Min and Max Value is required' })
  @IsOptional()
  min_and_max_value?: number;

  @IsString()
  @IsNotEmpty({ message: 'Color is required' })
  @IsOptional()
  color?: string;
}

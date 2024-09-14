import { IsNotEmpty, IsNumber, IsString, MinLength, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.01)
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  stock: number;
}
import { IsString } from 'class-validator';

export class CreateCategorieDto {
  @IsString()
  name: string;
}

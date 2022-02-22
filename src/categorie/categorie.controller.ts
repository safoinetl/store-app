import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategorieModel } from './catgorie.model';
import { CreateCategorieDto } from './Dto/Creat-Categorie.dto';

@Controller('categorie')
export class CategorieController {
  constructor(private categorieService: CategorieService) {}

  @Get()
  getAllCategories(): CategorieModel[] {
    return this.categorieService.getAllCategories();
  }
  @Post()
  createCategorie(
    @Body('category name') CreateCategorieDto: CreateCategorieDto,
  ): CategorieModel {
    return this.categorieService.createCategorie(CreateCategorieDto);
  }
}

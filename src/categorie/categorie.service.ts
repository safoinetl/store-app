import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { CategorieRepository } from 'src/product/categorie-repository';
import { CategorieModel } from './catgorie.model';
import { v4 as uuid } from 'uuid';
import { CreateCategorieDto } from './Dto/Creat-Categorie.dto';

@Injectable()
export class CategorieService {
  private categorie: CategorieModel[] = [];
  //   constructor(
  //     @InjectRepository(CategorieRepository)
  //     private categorieRepository: CategorieRepository,
  //   );
  getAllCategories(): CategorieModel[] {
    return this.categorie;
  }
  createCategorie(CreateCategorieDto: CreateCategorieDto): CategorieModel {
    const { categorie_name } = CreateCategorieDto;
    const categorie: CategorieModel = {
      id: uuid(),
      categorie_name,
    };
    this.categorie.push(categorie);
    return categorie;
  }
}

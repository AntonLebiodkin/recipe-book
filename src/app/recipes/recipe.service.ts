import { Injectable } from '@angular/core';

import { Recipe } from "../shared/recipe";
import { Ingredient } from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Kholodets', 'Surprising dish', 'http://www.prelest.com/files/articles_big/holodec_1.jpg', []),
    new Recipe('Dummy', 'Weird Dummy', 'http://visioservice.ru/image/catalog/pokemon.png', [])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
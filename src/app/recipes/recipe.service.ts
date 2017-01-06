import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "../shared/recipe";
import { Ingredient } from "../shared/ingredient";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Kholodets', 'Surprising dish', 'http://www.prelest.com/files/articles_big/holodec_1.jpg', []),
    new Recipe('Dummy', 'Weird Dummy', 'http://visioservice.ru/image/catalog/pokemon.png', [])
  ];
  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipe-book-1c678.firebaseio.com/recipes.json', body, { headers: headers })
  }

  fetchData() {
    return this.http.get('https://recipe-book-1c678.firebaseio.com/recipes.json')
                    .map((response: Response) => response.json())
                    .subscribe(
                      (data: Recipe[]) => {
                        console.log(data);
                        this.recipes = data;
                        this.recipesChanged.emit();
                      }
                    )
  }

}

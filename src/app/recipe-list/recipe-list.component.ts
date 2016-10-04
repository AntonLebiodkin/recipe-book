import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Weird Dummy', 'http://visioservice.ru/image/catalog/pokemon.png');

  constructor() { }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}

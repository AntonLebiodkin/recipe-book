import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', ''),
    new Recipe('Kholodets', 'Surprising dish', 'http://www.prelest.com/files/articles_big/holodec_1.jpg', ''),
    new Recipe('Dummy', 'Weird Dummy', 'http://visioservice.ru/image/catalog/pokemon.png')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}

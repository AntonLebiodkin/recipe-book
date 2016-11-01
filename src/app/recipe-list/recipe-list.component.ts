import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Recipe } from '../shared/recipe';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

}

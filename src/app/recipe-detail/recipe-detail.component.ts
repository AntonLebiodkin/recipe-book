import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

import { Recipe } from "../shared/recipe";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  private recipeIndex: number = 1;

  constructor(private sls: ShoppingListService, private router: Router) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    console.log('recipe added to shopping list ', this.selectedRecipe);
    this.sls.addItems(this.selectedRecipe.ingredients);
    console.log(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete() {
    this.router.navigate(['/recipes'])
  }

}

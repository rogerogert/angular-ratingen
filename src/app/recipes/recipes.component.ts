import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  public recipe!: Recipe;
  public isNewRecipeOpened = false;

  constructor() { }

  public setRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }

  public openNewRecipe() {
    if (this.isNewRecipeOpened) {
      this.isNewRecipeOpened = false;
    } else {
      this.isNewRecipeOpened = true;
    }
  }

}

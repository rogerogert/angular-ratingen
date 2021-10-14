import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  public recipe!: Recipe;
  public isNewRecipeOpened = false;

  constructor(private router: Router) { }

  public setRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }

  public openNewRecipe() {
    if (this.isNewRecipeOpened) {
      this.isNewRecipeOpened = false;
      this.router.navigate(['recipes'])
    } else {
      this.isNewRecipeOpened = true;
      this.router.navigate(['recipes/new'])
    }
  }

}

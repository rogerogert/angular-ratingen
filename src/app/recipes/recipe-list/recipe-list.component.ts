import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[] = []

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.recipeService.recipeAdded.subscribe((recipes) => {
      this.recipes = recipes;
    })
  }

  public selectRecipe(recipe: Recipe): void {
    //this.recipeSelected.emit(recipe);
    this.recipeService.recipeSelected.next(recipe);
  }

}

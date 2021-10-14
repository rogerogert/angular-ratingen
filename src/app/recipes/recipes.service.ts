import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public recipeSelected = new Subject<Recipe>();
  public recipeAdded = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    {
      name: "Recipe 1",
      description: "Recipe 1 Desc",
      imagePath: "https://i.pinimg.com/736x/4e/d3/36/4ed33645f07fa2ec1de7a56d9ff918a8.jpg",
      ingredients: [
        new Ingredient('Tomato', 1),
        new Ingredient('Beans', 300)
      ]
    },
    {
      name: "Recipe 2",
      description: "Recipe 2 Desc",
      imagePath: "https://th.bing.com/th/id/OIP.-5eWeRXcvrNXm4Jl8JSOZQHaIe?pid=ImgDet&rs=1",
      ingredients: [
        new Ingredient('Rice', 500),
        new Ingredient('Beans', 300)
      ]
    }
  ]

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeAdded.next(this.recipes.slice())
  }

  constructor() { }
}

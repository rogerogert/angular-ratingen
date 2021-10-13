import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  public recipeName = '';
  public recipeDesc = '';

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  public saveRecipe() {
    let recipe: Recipe = {
      name: this.recipeName,
      description: this.recipeDesc,
      imagePath: "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png"
    };

    this.recipeService.addRecipe(recipe);

  }

}

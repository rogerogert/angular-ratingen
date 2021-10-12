import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    {
      name: "Recipe 1",
      description: "Recipe 1 Desc",
      imagePath: "https://i.pinimg.com/736x/4e/d3/36/4ed33645f07fa2ec1de7a56d9ff918a8.jpg"
    },
    {
      name: "Recipe 2",
      description: "Recipe 2 Desc",
      imagePath: "https://th.bing.com/th/id/OIP.-5eWeRXcvrNXm4Jl8JSOZQHaIe?pid=ImgDet&rs=1"
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

  public selectRecipe(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }

}

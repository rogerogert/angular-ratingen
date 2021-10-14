import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  public ingredientsAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 1),
    new Ingredient('Beans', 5)
  ];

  constructor() { }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.next(this.ingredients.slice())
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('slf') public slForm!: NgForm
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.slForm);
    let ingredient: Ingredient = {
      name: this.slForm.value.name,
      amount: this.slForm.value.amount
    }
    this.shoppingListService.addIngredient(ingredient);
    this.reset();
  }

  public reset(): void {
    this.slForm.reset();
  }

}

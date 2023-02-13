import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('noddle', 'test!!!!', 'https://fakeimg.pl/250x100/', [
      new Ingredient('tomato', 100),
      new Ingredient('meat', 300),
    ]),
    new Recipe('rice', 'test2!!!!', 'https://fakeimg.pl/350x100/', [
      new Ingredient('patato', 200),
      new Ingredient('chicken', 150),
    ]),
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredient(ingredients);
  }
}

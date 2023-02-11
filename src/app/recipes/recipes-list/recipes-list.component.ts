import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('noddle', 'test!!!!', 'https://fakeimg.pl/250x100/'),
    new Recipe('rice', 'test2!!!!', 'https://fakeimg.pl/350x100/')
  ]

  constructor() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}

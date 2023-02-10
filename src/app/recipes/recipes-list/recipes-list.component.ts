import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('noddle', 'test!!!!', 'https://fakeimg.pl/250x100/'),
    new Recipe('rice', 'test2!!!!', 'https://fakeimg.pl/250x100/')
  ]

  constructor() {

  }
}

import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent {
  http!: HttpClient;
  url = 'https://jsonplaceholder.typicode.com/todos/1';
  selectedRecipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };
  constructor(
    private recipeService: RecipeService,
    private service: HttpClient
  ) {
    this.http = service;
  }
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
    this.loadApi();
  }

  loadApi() {
    this.http.get(this.url).subscribe((res) => {
      console.log('res', res);
    });
  }
}

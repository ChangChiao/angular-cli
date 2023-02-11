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
  selectedRecipe: Recipe = { name: '', description: '', imagePath: '', ingredients:[] };
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}

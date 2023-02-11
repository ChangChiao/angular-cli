import { Recipe} from './../recipe.model';
import { Component, Input  } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent {
  @Input() recipe: Recipe = {name: '', description:'', imagePath: '', ingredients:[]};
  constructor(private recipeService: RecipeService){

  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}

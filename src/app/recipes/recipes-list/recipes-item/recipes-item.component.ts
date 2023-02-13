import { RecipeService } from './../../recipe.service';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent {
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };
  @Input() index: number = 0;
  // @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {}
  // onSelect() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}

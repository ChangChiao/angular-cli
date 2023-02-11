import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {
  @Input() recipe: Recipe = {name: '', description: '', imagePath: ''};
  @Output() recipeSelected = new EventEmitter<void>();
  onSelect(){
    this.recipeSelected.emit();
  }
}

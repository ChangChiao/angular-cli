import { Recipe} from './../recipe.model';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent {
  @Input() recipe: Recipe = {name: '', description:'', imagePath: ''};
}

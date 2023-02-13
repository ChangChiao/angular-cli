import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent {
  id: number = 0;
  editMode= false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id']
      this.editMode = param['id'] !== null
    })
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isMax: boolean = true
  status: number = 0;
  constructor() {
    this.status = Math.random() > 0.5 ? 1 : 0;
  }

  getColor() {
    return this.status === 1 ? 'green' : 'red';
  }
}

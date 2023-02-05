import { Component } from '@angular/core';
import { userList } from './user.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cli';
  list = userList;
}

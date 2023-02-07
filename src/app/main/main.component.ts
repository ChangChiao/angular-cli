import { Component } from '@angular/core';
import { userList } from '../user.const';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  list = userList
}

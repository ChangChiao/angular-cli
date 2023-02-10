import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  dynamicTitle: string = 'box';
  isShow: boolean = true;
  name: string = '';
  title: string = '3Q!'
  inputValue: string = '';
  changeTitle() {
    this.title = 'No Q!'
  }

  handleChange(event: Event) {
    console.log('event', event)
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
}

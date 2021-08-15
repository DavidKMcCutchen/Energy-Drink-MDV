import { Component } from '@angular/core';

@Component({
  selector: 'energy-drink-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Products';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'products', icon: 'view_list', title: 'Products'}
  ]
}

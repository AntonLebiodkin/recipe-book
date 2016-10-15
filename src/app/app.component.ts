import { Component } from '@angular/core';
import { HeaderComponent} from './header/header.component';
import {RecipeService} from './recipes/';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {

}

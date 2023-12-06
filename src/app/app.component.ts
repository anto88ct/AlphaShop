import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-alphashop-app';
  saluti: string = 'benvenuti in AlpaShop';
  bollini: number = 10;
}

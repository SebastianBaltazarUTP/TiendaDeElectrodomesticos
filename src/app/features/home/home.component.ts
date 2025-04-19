import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredProducts = [
    { id: 1, name: 'Producto Destacado 1', price: 100 },
    { id: 2, name: 'Producto Destacado 2', price: 150 },
    { id: 3, name: 'Producto Destacado 3', price: 200 }
  ];
}
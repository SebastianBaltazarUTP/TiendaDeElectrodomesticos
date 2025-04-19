import { Component, OnInit } from '@angular/core'; // Añadir OnInit
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html'
})
export class ProductCatalogComponent implements OnInit { // Implementar OnInit
  products$: any; // Definir tipo explícitamente

  constructor(private productService: ProductService) {}

  ngOnInit() { // Inicializar en el lifecycle hook
    this.products$ = this.productService.getProducts();
  }
}
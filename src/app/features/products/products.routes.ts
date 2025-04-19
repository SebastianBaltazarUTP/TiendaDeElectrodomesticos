// src/app/features/products/products.routes.ts
import { Routes } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductCatalogComponent },
  { path: ':id', component: ProductDetailComponent }
];
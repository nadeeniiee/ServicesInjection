import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list.component';
import { Cart } from './cart/cart.component';

export const routes: Routes = [
    {path: "", component:ProductList},
    {path: "cart", component:Cart}
];

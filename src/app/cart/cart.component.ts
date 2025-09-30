import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceFunctions } from '../services/functions.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class Cart {
  cartItems:any[] = [];

  constructor(private functions: ServiceFunctions){}

  ngOnInit(){
    this.cartItems = this.functions.getCartItems();
  }

  get totalItems(){
    return this.functions.getCartTotalItems();
  }
  get totalPrice(){
    return this.functions.getCartTotalPrice();
  }
}

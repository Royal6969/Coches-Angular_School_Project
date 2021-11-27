import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public equipments: any = [];

  public subtotal: number | undefined;
  public tax: number | undefined;
  public deliver: number | undefined;
  public finalTotal: number | undefined;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getEquipments()
      .subscribe((res) => {
        this.equipments = res;
        this.subtotal = this.cartService.getSubtotal();
        this.tax = this.cartService.getTax(this.subtotal);
        this.deliver = this.cartService.getDeliver(this.subtotal);
        this.finalTotal = this.cartService.getTotalPrice();
      })
  }

  removeEquipment(equipment: any) {
    this.cartService.removeCartEquipment(equipment);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

}

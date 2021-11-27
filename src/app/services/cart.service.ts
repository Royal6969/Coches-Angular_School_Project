import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartEquipmentList: any = [];

  public equipmentList = new BehaviorSubject<any>([]);

  public search = new BehaviorSubject<string>("");

  constructor() { }

  getEquipments() {
    return this.equipmentList.asObservable();
  }

  setEquipment(equipment: any) {
    this.cartEquipmentList.push(...equipment);
    this.equipmentList.next(equipment);
  }

  addToCart(equipment: any) {
    this.cartEquipmentList.push(equipment);
    this.equipmentList.next(this.cartEquipmentList);
    this.getTotalPrice();

    console.log(this.cartEquipmentList);
  }

  getSubtotal(): number {
    let subtotal = 0;
    this.cartEquipmentList.map((equipment: any) => {
      subtotal += equipment.total;
    })

    return subtotal;
  }

  getTax(subtotal: number): number {
    let tax = 0.21;
    this.cartEquipmentList.map((equipment: any) => {
      tax = subtotal * 0.21;
    })

    return tax;
  }

  getDeliver(subtotal: number): number {
    let deliver = 0.1;
    this.cartEquipmentList.map((equipment: any) => {
      deliver = subtotal * 0.1;
    })

    return deliver;
  }

  getTotalPrice(): number {
    let finalTotal = 0;
    this.cartEquipmentList.map((equipment: any) => {
      finalTotal += equipment.total + (equipment.total * 0.21) + (equipment.total * 0.1);
    })

    return finalTotal;
  }

  removeCartEquipment(equipment: any) {
    this.cartEquipmentList.map((item: any, index: any) => {
      if (equipment.id === item.id) {
        this.cartEquipmentList.splice(index, 1);
      }
    })
    
    this.equipmentList.next(this.cartEquipmentList);
  }

  removeAllCart() {
    this.cartEquipmentList = [];
    this.equipmentList.next(this.cartEquipmentList);
  }
}

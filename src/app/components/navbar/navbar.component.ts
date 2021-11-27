import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public totalEquipment: number = 0;
  public searchStringMatch: string | undefined;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getEquipments()
      .subscribe((res) => {
        this.totalEquipment = res.length;
      })
  }

  search(event: any) {
    this.searchStringMatch = (event.target as HTMLInputElement).value;
    console.log(this.searchStringMatch);

    this.cartService.search.next(this.searchStringMatch);
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { EquipamientoService } from 'src/app/services/equipamiento.service';

@Component({
  selector: 'app-equipamientos',
  templateUrl: './equipamientos.component.html',
  styleUrls: ['./equipamientos.component.css']
})

export class EquipamientosComponent implements OnInit {

  public equipmentsList: any;
  
  public equipmentsListBMW: any;
  public equipmentsListMercedes: any;
  public equipmentsListAudi: any;

  searchKey: string = "";

  public filterCategory: any;

  public filterCategoryBMW: any;
  public filterCategoryMercedes: any;
  public filterCategoryAudi: any;

  constructor(
    private equipamientoService: EquipamientoService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.equipamientoService.getProduct()
      .subscribe((res) => {
        this.equipmentsList = res;
        this.filterCategory = res;

        this.equipmentsList.forEach((equipment: any) => {
          if (equipment.categoria === "pintura") {
            equipment.categoria = "pinturas";
          }
          else if (equipment.categoria === "motor") {
            equipment.categoria = "motores";
          }
          else if (equipment.categoria === "combustible") {
            equipment.categoria = "combustibles";
          }

          Object.assign(equipment, { quantity: 1, total: equipment.precio });
        });
        // console.log(this.equipmentsList);
      });

      this.equipamientoService.getBMWequipments()
      .subscribe((resBMW) => {
        this.equipmentsListBMW = resBMW;
        this.filterCategoryBMW = resBMW;

        this.equipmentsListBMW.forEach((equipment: any) => {
          if (equipment.categoria === "pintura") {
            equipment.categoria = "pinturas";
          }
          else if (equipment.categoria === "motor") {
            equipment.categoria = "motores";
          }
          else if (equipment.categoria === "combustible") {
            equipment.categoria = "combustibles";
          }

          Object.assign(equipment, { quantity: 1, total: equipment.precio });
        });
        // console.log(this.equipmentsList);
      });

      this.equipamientoService.getMercedesEquipments()
      .subscribe((resMercedes) => {
        this.equipmentsListMercedes = resMercedes;
        this.filterCategoryMercedes = resMercedes;

        this.equipmentsListMercedes.forEach((equipment: any) => {
          if (equipment.categoria === "pintura") {
            equipment.categoria = "pinturas";
          }
          else if (equipment.categoria === "motor") {
            equipment.categoria = "motores";
          }
          else if (equipment.categoria === "combustible") {
            equipment.categoria = "combustibles";
          }

          Object.assign(equipment, { quantity: 1, total: equipment.precio });
        });
        // console.log(this.equipmentsList);
      });

      this.equipamientoService.getAudiEquipments()
      .subscribe((resAudi) => {
        this.equipmentsListAudi = resAudi;
        this.filterCategoryAudi = resAudi;

        this.equipmentsListAudi.forEach((equipment: any) => {
          if (equipment.categoria === "pintura") {
            equipment.categoria = "pinturas";
          }
          else if (equipment.categoria === "motor") {
            equipment.categoria = "motores";
          }
          else if (equipment.categoria === "combustible") {
            equipment.categoria = "combustibles";
          }

          Object.assign(equipment, { quantity: 1, total: equipment.precio });
        });
        // console.log(this.equipmentsList);
      });

    this.cartService.search
      .subscribe((value: any) => {
        this.searchKey = value;
      });
  };

  addToCart(equipment: any) {
    this.cartService.addToCart(equipment);
  };

  categoryFilter(category: string) {
    this.filterCategory = this.equipmentsList
      .filter((i: any) => {
        if (i.categoria == category || category == '') {
          return i;
        }
      });
  };

  categoryFilterBMW(category: string) {
    this.filterCategoryBMW = this.equipmentsListBMW
      .filter((i: any) => {
        if (i.categoria == category || category == '') {
          return i;
        }
      });
  };

  categoryFilterMercedes(category: string) {
    this.filterCategoryMercedes = this.equipmentsListMercedes
      .filter((i: any) => {
        if (i.categoria == category || category == '') {
          return i;
        }
      });
  };

  categoryFilterAudi(category: string) {
    this.filterCategoryAudi = this.equipmentsListAudi
      .filter((i: any) => {
        if (i.categoria == category || category == '') {
          return i;
        }
      });
  };

}

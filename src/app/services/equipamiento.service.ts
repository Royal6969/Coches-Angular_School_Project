import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EquipamientoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProduct() {
    return this.httpClient.get<any>("../../assets/equipamientos.json")
      .pipe(map((res: any) => {
        return res;
      }));
  };

  getBMWequipments() {
    return this.httpClient.get<any>("../../assets/equipamientosBMW.json")
      .pipe(map((resBMW: any) => {
        return resBMW;
      }));
  };

  getMercedesEquipments() {
    return this.httpClient.get<any>("../../assets/equipamientosMercedes.json")
      .pipe(map((resMercedes: any) => {
        return resMercedes;
      }));
  };

  getAudiEquipments() {
    return this.httpClient.get<any>("../../assets/equipamientosAudi.json")
      .pipe(map((resAudi: any) => {
        return resAudi;
      }));
  };

}

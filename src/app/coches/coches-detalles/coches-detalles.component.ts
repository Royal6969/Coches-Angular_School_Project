import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CochesModel } from 'src/app/interfaces/coches-model';
import { COCHES } from 'src/app/mocks/coches-mock';

@Component({
  selector: 'app-coches-detalles',
  templateUrl: './coches-detalles.component.html',
  styleUrls: ['./coches-detalles.component.css']
})

export class CochesDetallesComponent implements OnInit {

  coche: CochesModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMaps: ParamMap) => {
        let id = Number(paramMaps.get('id'));
        this.coche = COCHES[id];
        this.coche = COCHES.find((item) => item.id === id);
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CochesModel } from 'src/app/interfaces/coches-model';
import { COCHES } from 'src/app/mocks/coches-mock';

@Component({
  selector: 'app-coches-imagenes',
  templateUrl: './coches-imagenes.component.html',
  styleUrls: ['./coches-imagenes.component.css']
})
export class CochesImagenesComponent implements OnInit {

  idCoche: number | undefined;
  
  coche: CochesModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap
      .subscribe((paramMaps: ParamMap) => {
        this.idCoche = Number(paramMaps.get('id'));

        let idCoche = Number(paramMaps.get('id'));
        this.coche = COCHES[idCoche];
      })
  }

}

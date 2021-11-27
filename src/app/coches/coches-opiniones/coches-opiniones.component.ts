import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CochesModel } from 'src/app/interfaces/coches-model';
import { OpinionModel } from 'src/app/interfaces/opinion-model';
import { COCHES } from 'src/app/mocks/coches-mock';
import { OPINIONES } from 'src/app/mocks/opiniones-mock';

@Component({
  selector: 'app-coches-opiniones',
  templateUrl: './coches-opiniones.component.html',
  styleUrls: ['./coches-opiniones.component.css']
})
export class CochesOpinionesComponent implements OnInit {

  coche: CochesModel | undefined;
 
  opiniones: OpinionModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap
      .subscribe((paramMaps: ParamMap) => {
        let id = Number(paramMaps.get('id'));
        this.coche = COCHES[id];
      })
      // una vez que hemos definido el método para las opiniones, lo llamamos aquí
      this.opinionesDeCadaCoche();
  }

  opinionesDeCadaCoche(): void {
    this.opiniones = OPINIONES.filter(
      (item) => item.idCoche === this.coche?.id
    );
  }

}

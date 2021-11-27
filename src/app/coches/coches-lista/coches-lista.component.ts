import { Component, OnInit } from '@angular/core';
import { CochesModel } from 'src/app/interfaces/coches-model';
import { COCHES } from 'src/app/mocks/coches-mock';

@Component({
  selector: 'app-coches-lista',
  templateUrl: './coches-lista.component.html',
  styleUrls: ['./coches-lista.component.css']
})
export class CochesListaComponent implements OnInit {

  coches: CochesModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.coches = COCHES;
  }

}

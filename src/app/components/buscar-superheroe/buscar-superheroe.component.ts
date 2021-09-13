import { HeroeService } from './../../services/heroe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-superheroe',
  templateUrl: './buscar-superheroe.component.html',
  styleUrls: ['./buscar-superheroe.component.css']
})
export class BuscarSuperheroeComponent implements OnInit {
  nombreImagen: string;

  constructor(private _heroeService: HeroeService) { 
    this.nombreImagen = '';
  }

  ngOnInit(): void {
  }



}

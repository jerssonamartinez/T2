import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../Peliculas';
import { Pelicula } from '../listaP';

@Component({
  selector: 'app-lista-p',
  templateUrl: './lista-p.component.html',
  styleUrls: ['./lista-p.component.css']
})
export class ListaPComponent implements OnInit {

    listado= Pelicula;
    pel = Peliculas;
    pelSelec: Peliculas;
    
    darClick(pelClick:Peliculas):void{
        this.pelSelec = pelClick;
        
    }
    
  constructor() { }

  ngOnInit() {
  }

}

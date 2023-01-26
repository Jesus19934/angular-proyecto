import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-heroes',
  templateUrl: './prueba-heroes.component.html',
  styleUrls: ['./prueba-heroes.component.css']
})
export class PruebaHeroesComponent implements OnInit {

  heroes: string[] = ['Superman','Diana','Batman','Deadpool'];
  heroeBorrado: string = '';

  borrarHeroes(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('heroeBorrado');
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeapiService } from '../../services/pokeapi.service'
import {IPokemon} from '../../model/pokemon'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  pokemons$: Observable<IPokemon>;
  pokemons;
  num: number = 1;

  constructor
  (
    private pokeapiService: PokeapiService
  ) {
    this.pokemons$ = this.pokeapiService.getPokemons(this.num);
  }

  ngOnInit(): void {
    
  }

  getImages(i: number): String {
    return `https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`
  }

  changeNumber(num: number): void{
    console.log(num)
    this.num = num;
    this.pokemons$ = this.pokeapiService.getPokemons(this.num);
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}

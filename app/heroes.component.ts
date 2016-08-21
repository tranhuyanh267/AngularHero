import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']

})
export class HeroesComponent implements OnInit {


  heroes: Hero[];
  title: string = "This is my title";
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}





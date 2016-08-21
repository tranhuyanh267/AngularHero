import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})




export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;


  constructor(private route: ActivatedRoute, private heroService: HeroService) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  goBack() {
    window.history.back();
  }
}

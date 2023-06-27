import { Component, OnInit  } from '@angular/core';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(
    private heroService :HeroService
  ){}

    Fruits = this.heroService.fruits
  ngOnInit(): void {
    
  }
}

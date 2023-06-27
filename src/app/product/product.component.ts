import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  

  constructor(
    private activateroute : ActivatedRoute,
    private heroService : HeroService
  ){}

  fruitId: any;
  fruit: any;
  fruits = this.heroService.fruits

  ngOnInit(): void {

    this.fruitId = this.activateroute.snapshot.paramMap.get('id')
    this.fruit = this.fruits.find(x => x.id == this.fruitId)
    
  }

}

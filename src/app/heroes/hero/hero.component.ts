import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name : string = 'ironman';
  public age : number = 45;

  public get nameCapitalized() : string {
    return this.name.toUpperCase();
  }

  public getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  public chageHero():void{
    this.name = 'Spiderman';

  }

  public chageAge():void{
    this.age = 16;
  }

  public resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}

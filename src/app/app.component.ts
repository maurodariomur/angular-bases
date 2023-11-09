import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular';
  public counter: number = 10;

  public incriseBy():void{
    this.counter++;
  }

  /*public decriseBy(value:number):void{
    value=this.counter--;
  }*/
}

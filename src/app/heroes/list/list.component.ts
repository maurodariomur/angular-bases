import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public herosName : string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public deleteHero? : string ;

  removeLastHero() : void {
    this.deleteHero = this.herosName.pop();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    { name:"Chicken Burrito", description: "gegrillter Tortilla Fladen mit gegrilltem Hühnerbrustfilet", price: 6},
    { name:"Beef Burrito", description: "gegrillter Tortilla Fladen mit reinem Rindfleisch und fruchtig-würziger Sauce", price: 6},
    { name:"Vegan Burrito", description: "gegrillter Tortilla Fladen mit gegrilltem Gemüse", price: 6},
    { name:"Ben&Jerry Sorten", description: "leckere Ben&Jerry Eis Sorten", price: 5.6},
    { name:"Häagen Dazs", description: "Eis Sorten von Häagen Dazs", price: 5.6},
    { name:"Getränk", description: "Getränke deiner Wahl", price: 2.5},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

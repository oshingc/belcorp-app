import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  heroes = [];
  url = "https://www.cyzone.com/pe/wp-content/uploads/sites/11/2020/02/Banner_SkinFirst.jpg";

  constructor() {
    
    this.heroes = [{
      image: 'https://www.cyzone.com/pe/wp-content/uploads/sites/11/2020/02/Banner_SkinFirst.jpg'
    }]
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import "@belcorp/fractal/dist/fractal/fractal.css";
import { FdButton } from "@belcorp/fractal/dist/components";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  options = {
    slidesPerView: 3
  }

  constructor() {     
  }

  ngOnInit() {
  }
  

}

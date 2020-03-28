import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {

  constructor() {    
   }

  ngOnInit() {
    this.cartCount();
  }

  cartCount(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart == null){
      cart = [];
    }
    return cart.length;
  }

}

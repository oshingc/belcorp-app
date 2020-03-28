import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Belcorp';

  cartCount(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart == null){
      cart = [];
    }
    return cart.length;
  }
}



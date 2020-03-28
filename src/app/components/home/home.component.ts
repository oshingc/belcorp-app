import { Component, OnInit } from '@angular/core';
import "@belcorp/fractal/dist/fractal/fractal.css";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  options = {
    slidesPerView: 3
  }

  products = [
    {
      id: 1,
      name: 'Nombre del producto en dos líneas',
      cantidad: 1,
      stock: 10,
      precio: 21,
      dscto: 30,
      ganancia: 9,
      precioTotal: 30,
      url: "/assets/img/image16.png",
      d: true
    },
    {
      id: 2,
      name: 'Nombre del producto en dos líneas',
      cantidad: 1,
      stock: 10,
      precio: 28,
      dscto: 30,
      ganancia: 12,
      precioTotal: 40,
      url: "/assets/img/coso4.png",
      d: true
    },
    {
      id: 3,
      name: 'Nombre del producto en dos líneas',
      cantidad: 1,
      stock: 10,
      precio: 35,
      dscto: 30,
      ganancia: 15,
      precioTotal: 50,
      url: "/assets/img/labial.png",
      d: true
    },
    {
      id: 4,
      name: 'Nombre del producto en dos líneas',
      cantidad: 1,
      stock: 10,
      precio: 49,
      dscto: 30,
      ganancia: 21,
      precioTotal: 70,
      url: "/assets/img/perfume1.png",
      d: true
    },
    {
      id: 5,
      name: 'Nombre del producto en dos líneas',
      cantidad: 1,
      stock:10,
      precio: 35,
      dscto: 30,
      ganancia: 15,
      precioTotal: 50,
      url: "/assets/img/perfume3.png",
      d: true
    },
    {
      id: 6,
      name: 'Nombre del producto en dos líneas',
      cantidad: 1,
      stock: 10,
      precio: 49,
      dscto: 30,
      ganancia: 21,
      precioTotal: 70,
      url: "/assets/img/perfume4.png",
      d: true
    }
  ];

  constructor() {     
    let products = JSON.parse(localStorage.getItem("products"));
    if(products == null){
      localStorage.setItem("products", JSON.stringify(this.products));
    }else{
      this.products = products;
    }
  }

  ngOnInit() {
    this.loadStock();
  }

  agregar(id){
    let item = this.products.filter(obj => {
      return obj.id === id
    });
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart == null){
      cart = [];
      cart.push(item[0]);
    }else{
      let cartItem = cart.filter(obj => {
        return obj.id === id;
      });
      if(cartItem.length != 0){
        cartItem[0].cantidad += 1;
        let i = cart.findIndex((obj => obj.id == id));
        cart[i].cantidad = cartItem[0].cantidad;
      }else{
        cart.push(item[0]);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadStock();
  }

  loadStock(){

    if(this.products != null && this.products.length >0){
      this.products.forEach(function(part, index) {
        var result = document.getElementsByClassName("card-"+part.id);
        if(part.cantidad < part.stock - 1){
          result[0].setAttribute('has-stock','true');
        }else{
          result[0].setAttribute('has-stock','false');
        }
      });
    }

    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart != null && cart.length >0){
      cart.forEach(function(part, index) {
        var result = document.getElementsByClassName("card-"+part.id);
        if(part.cantidad < part.stock - 1){
          result[0].setAttribute('has-stock','true');
        }else{
          result[0].setAttribute('has-stock','false');
        }
      });   
    } 
  }
}

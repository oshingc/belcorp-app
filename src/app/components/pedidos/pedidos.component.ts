import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  headers = ["url", "name", "cantidad", "precio", "dscto", "ganancia", "precioTotal"];
  montoTotal = 0;
  gananciaTotal = 0;
  cart = [];

  constructor() { }

  ngOnInit() {
    this.montoTotal = this.calcularMonto();
    this.gananciaTotal = this.calcularGanancia();
    this.cart = JSON.parse(localStorage.getItem("cart"));
    console.log(this.cart);
    if(this.cart == null){
      this.cart = [];
    }
  }

  calcularMonto(){
    for(let a of this.cart){
      this.montoTotal += a.precioTotal;
    }
    return this.montoTotal;
  }

  calcularGanancia(){
    for(let a of this.cart){
      this.gananciaTotal += a.ganancia;
    }
    return this.gananciaTotal;
  }

  eliminarItem(data_item){
    this.gananciaTotal -= data_item.ganancia;
    this.montoTotal -= data_item.precioTotal;
    this.cart = this.cart.filter(item => item.id !== data_item.id);
    localStorage.setItem("cart", JSON.stringify(this.cart[0]));
  }

  eliminarTodo(){
    this.cart = [];
    this.gananciaTotal = 0;
    this.montoTotal = 0;
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  increaseAmount(item){
    let id = item.id;
    if(item.cantidad<item.stock){      
      item.cantidad+=1;

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
    }
    
    /*
    let item = this.products.filter(obj => {
      return obj.id === id
    });*/
  }

  decreaseAmount(item){
    let id = item.id;
    if(item.cantidad>=2){
      item.cantidad-=1;
      
      let cart = JSON.parse(localStorage.getItem("cart"));
      if(cart == null){
        cart = [];
        cart.push(item[0]);
      }else{
        let cartItem = cart.filter(obj => {
          return obj.id === id;
        });
        if(cartItem.length != 0){
          cartItem[0].cantidad -= 1;
          let i = cart.findIndex((obj => obj.id == id));
          cart[i].cantidad = cartItem[0].cantidad;
        }else{
          cart.push(item[0]);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

}

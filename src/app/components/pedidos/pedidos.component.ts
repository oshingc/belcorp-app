import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  headers = ["url", "name", "cantidad", "precio", "dscto", "ganancia", "precioTotal"];
  cart = [];

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    if(this.cart == null){
      this.cart = [];
    }
  }

  calcularMonto(){
    let montoTotal = 0;
    for(let a of this.cart){
      montoTotal += a.precioTotal * a.cantidad;
    }
    return montoTotal;
  }

  calcularGanancia(){
    let gananciaTotal = 0;
    for(let a of this.cart){
      gananciaTotal += a.ganancia * a.cantidad;
    }
    return gananciaTotal;
  }

  eliminarItem(data_item){
    let i = this.cart.findIndex((obj => obj.id == data_item.id));    
    this.cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  eliminarTodo(){    
    let result = window.confirm("¿Desea eliminar todos los pedidos?");
    if(result){      
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }

  increaseAmount(item){
    if(item.cantidad<item.stock){      
      item.cantidad+=1;
      let cart = JSON.parse(localStorage.getItem("cart"));
      if(cart == null){
        cart = [];
        cart.push(item[0]);
      }else{
        let cartItem = cart.filter(obj => {
          return obj.id === item.id;
        });
        if(cartItem.length != 0){
          cartItem[0].cantidad += 1;
          let i = cart.findIndex((obj => obj.id == item.id));
          cart[i].cantidad = cartItem[0].cantidad;
        }else{
          cart.push(item[0]);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  decreaseAmount(item){
    if(item.cantidad >= 2){
      item.cantidad -=1 ;      
      let cart = JSON.parse(localStorage.getItem("cart"));
      if(cart == null){
        cart = [];
        cart.push(item[0]);
      }else{
        let cartItem = cart.filter(obj => {
          return obj.id === item.id;
        });
        if(cartItem.length != 0){
          cartItem[0].cantidad -= 1;
          let i = cart.findIndex((obj => obj.id == item.id));
          cart[i].cantidad = cartItem[0].cantidad;
        }else{
          cart.push(item[0]);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  enviarPedido(){
    let products = JSON.parse(localStorage.getItem("products"));
    let cart = JSON.parse(localStorage.getItem("cart"));
    let productsToUpdate = [];
    cart.forEach(function(part, index) {
      let p = products.filter(obj => {
        return obj.id === part.id;
      });
      p[0].stock -= cart[index].cantidad;
      productsToUpdate.push(p);
    });
    this.cart = [];
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.removeItem("cart");
    window.alert("¡Pedido realizado con éxito!");
  }
}

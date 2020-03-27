import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  headers = ["url", "name", "cantidad", "precio", "dscto", "ganancia", "precioTotal"];

  products = [
    {
      name: 'Nombre del producto en dos líneas',
      cantidad: 10,
      precio: 12,
      dscto: 30,
      ganancia: 0,
      precioTotal: 0,
      url: "/assets/img/image16.png",
      d: true
    },
    {
      name: 'Nombre del producto en dos líneas',
      cantidad: 8,
      precio: 12,
      dscto: 30,
      ganancia: 0,
      precioTotal: 0,
      url: "/assets/img/coso4.png",
      d: true
    },
    {
      name: 'Nombre del producto en dos líneas',
      cantidad: 12,
      precio: 12,
      dscto: 30,
      ganancia: 0,
      precioTotal: 0,
      url: "/assets/img/labial.png",
      d: true
    },
    {
      name: 'Nombre del producto en dos líneas',
      cantidad: 12,
      precio: 12,
      dscto: 30,
      ganancia: 0,
      precioTotal: 0,
      url: "/assets/img/perfume1.png",
      d: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

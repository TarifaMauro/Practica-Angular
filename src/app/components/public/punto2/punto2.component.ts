import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  productos = [
    {
      nombre: 'Notebook Asus 13L',
      descripcion: 'Disco 40GB, 15 pulgadas',
      img: 'assets/notebook13l.jpg',
      precio: 45.5
    },
    {
      nombre: 'Monitor LG 14',
      descripcion: 'Monitor HD 14 pulgadas',
      img: 'assets/producto02.jpg',
      precio: 99
    },
    {
      nombre: 'Mouse Inalámbrico',
      descripcion: 'Mouse óptico inalámbrico',
      img: 'assets/producto03.jpg',
      precio: 15
    }
  ];

  carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    const yaAgregado = this.carrito.find(p => p.nombre === producto.nombre);
    if (!yaAgregado) {
      this.carrito.push(producto);
    }
  }

  get total(): number {
    return this.carrito.reduce((sum, p) => sum + p.precio, 0);
  }

}

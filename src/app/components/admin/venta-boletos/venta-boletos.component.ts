import { Component, OnInit } from '@angular/core';
import { Boleto } from '../../../models/boleto';
import { BoletoService } from '../../../services/boleto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-venta-boletos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './venta-boletos.component.html',
  styleUrl: './venta-boletos.component.css'
})
export class VentaBoletosComponent implements OnInit {
  boleto: Boleto = new Boleto('', 0, 0, new Date(), '');
  precioTotal: number = 0;
  boletos: Boleto[] = [];
  resumen: any = {};
  modoEdicion: boolean = false;
  idEditando: number | null = null;

  constructor(private boletoService: BoletoService) {}

  ngOnInit() {
    this.cargarBoletos();
  }

  cargarBoletos() {
    this.boletos = this.boletoService.obtenerBoletos();
    this.actualizarResumen();
  }

  calcularPrecio() {
    const basePrecio = this.boleto.precio;
    if (this.boleto.categoriaTurista == 1) {
      this.precioTotal = basePrecio * 0.65; 
    } else if (this.boleto.categoriaTurista == 3) {
      this.precioTotal = basePrecio * 0.5; 
    } else {
      this.precioTotal = basePrecio; 
    }
  }

  registrarBoleto() {
    if (!this.boleto.dni || !this.boleto.precio || !this.boleto.email || this.boleto.categoriaTurista === 0) {
      alert('Por favor complete todos los campos');
      return;
    }

    if (this.modoEdicion && this.idEditando !== null) {
      const datosActualizados = new Boleto(
        this.boleto.dni,
        this.precioTotal,
        this.boleto.categoriaTurista,
        new Date(),
        this.boleto.email
      );
      datosActualizados.id = this.idEditando; // mantener el ID original
      this.boletoService.editarBoleto(this.idEditando, datosActualizados);
      this.modoEdicion = false;
      this.idEditando = null;
    } else {
      const nuevoBoleto = new Boleto(
        this.boleto.dni,
        this.precioTotal,
        this.boleto.categoriaTurista,
        new Date(),
        this.boleto.email
      );
      this.boletoService.agregarBoleto(nuevoBoleto);
    }

    this.cargarBoletos();
    this.boleto = new Boleto('', 0, 0, new Date(), '');
    this.precioTotal = 0;
  }

  prepararEdicion(id: number) {
    const boleto = this.boletos.find(b => b.id === id);
    if (boleto) {
      this.boleto = { ...boleto };
      this.precioTotal = boleto.precio;
      this.modoEdicion = true;
      this.idEditando = id;
    }
  }

  eliminarBoleto(id: number) {
    if (confirm('¿Está seguro de eliminar este boleto?')) {
      this.boletoService.eliminarBoleto(id);
      this.cargarBoletos();
    }
  }

  actualizarResumen() {
    this.resumen = this.boletoService.obtenerResumen();
  }

  obtenerNombreCategoria(categoria: number): string {
    switch (categoria) {
      case 1: return 'Menor';
      case 2: return 'Adulto';
      case 3: return 'Jubilado';
      default: return 'Desconocido';
    }
  }
}

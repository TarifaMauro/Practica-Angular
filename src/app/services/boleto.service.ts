import { Injectable } from '@angular/core';
import { Boleto } from '../models/boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private boletos: Boleto[] = [];
  private idCounter = 1;

  agregarBoleto(boleto: Boleto) {
    boleto.id = this.idCounter++; // Asignar un ID único al boleto
    this.boletos.push(boleto);
  }
  obtenerBoletos(): Boleto[] {
    return this.boletos;
  }
  editarBoleto(id: number, datosActualizados: Boleto) {
    const index = this.boletos.findIndex(b => b.id === id);
    if (index !== -1) {
      this.boletos[index] = { ...this.boletos[index], ...datosActualizados };
    }
  }

  eliminarBoleto(id: number) {
    this.boletos = this.boletos.filter(b => b.id !== id);
  }

  obtenerResumen() {
    const resumen = {
      menor: 0,
      adulto: 0,
      jubilado: 0,
      total: 0,
    }
    this.boletos.forEach(boleto => {
      if (boleto.categoriaTurista == 1) resumen.menor += 1;
      if (boleto.categoriaTurista == 2) resumen.adulto += 1;
      if (boleto.categoriaTurista == 3) resumen.jubilado += 1;
      resumen.total += boleto.precio;
    });
    return resumen;
  }


  constructor() { }
}

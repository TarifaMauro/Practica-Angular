import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css'
})
export class Punto3Component {
  categorias: { nombre: string, palabras: string[] }[] = [
    { nombre: 'Animales', palabras: ['perro', 'gato', 'elefante', 'jirafa'] },
    { nombre: 'Comidas', palabras: ['pizza', 'hamburguesa', 'sushi', 'empanada'] },
    { nombre: 'Lugares', palabras: ['paris', 'tokio', 'londres', 'roma'] }
  ];

  categoriaSeleccionada: string = '';
  palabraAdivinar: string = '';
  palabraOculta: string[] = [];
  intentosRestantes: number = 5;
  letrasIngresadas: string[] = [];
  mensaje: string = '';

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    // Seleccionar categoría aleatoria
    const indiceCategoria = Math.floor(Math.random() * this.categorias.length);
    const categoria = this.categorias[indiceCategoria];
    this.categoriaSeleccionada = categoria.nombre;

    // Seleccionar palabra aleatoria de la categoría
    const indicePalabra = Math.floor(Math.random() * categoria.palabras.length);
    this.palabraAdivinar = categoria.palabras[indicePalabra].toUpperCase();

    // Inicializar variables
    this.palabraOculta = Array(this.palabraAdivinar.length).fill('_');
    this.intentosRestantes = 5;
    this.letrasIngresadas = [];
    this.mensaje = '';
    this.actualizarImagen(); // Inicializar imagen al comenzar el juego
  }

  intentar(letra: string) {
    letra = letra.toUpperCase();

    if (this.letrasIngresadas.includes(letra) || this.mensaje) {
      return; // Si ya fue ingresada o el juego terminó, no hacer nada
    }

    this.letrasIngresadas.push(letra);

    if (this.palabraAdivinar.includes(letra)) {
      for (let i = 0; i < this.palabraAdivinar.length; i++) {
        if (this.palabraAdivinar[i] === letra) {
          this.palabraOculta[i] = letra;
        }
      }
    } else {
      this.intentosRestantes--;
      this.actualizarImagen(); // Actualizar imagen al fallar
    }

    this.verificarJuego();
  }

  verificarJuego() {
    if (!this.palabraOculta.includes('_')) {
      this.mensaje = '¡Ganaste!';
    } else if (this.intentosRestantes === 0) {
      this.mensaje = `¡Perdiste! La palabra era: ${this.palabraAdivinar}`;
    }
  }
  //Agrega la imagen
  imagenAhorcado: string = 'assets/img/ahorcado_5.jpg';

  actualizarImagen() {
    this.imagenAhorcado = `assets/img/ahorcado_${this.intentosRestantes}.jpg`;
  }
}

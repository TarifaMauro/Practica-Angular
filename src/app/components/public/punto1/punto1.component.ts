import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  noticias = [
    {titulo: 'Fallecimiento del Papa Francisco', 
    contenido: 'El Papa Francisco falleció el lunes 21 de abril de 2025 a los 88 años en su residencia de la Casa de Santa Marta, en el Vaticano.',
    imagen: 'assets/img/noticia1.jpeg'
    },
    {titulo: 'River vence a Boca en el Superclásico',
    contenido: 'El pasado domingo 27 de abril, River Plate se impuso 2-1 a Boca Juniors en un emocionante Superclásico disputado en el estadio Monumental ante más de 85,000 espectadores.',
    imagen: 'assets/img/noticia2.jpeg'
    },
    {titulo: ' Elecciones Legislativas en Jujuy',
    contenido: 'Las elecciones legislativas en la provincia de Jujuy están programadas para el domingo 11 de mayo de 2025.',
    imagen: 'assets/img/noticia3.jpeg'
    }
  ]

  indice = 0;

  siguiente() {
    if(this.indice < this.noticias.length - 1) {
      this.indice++;
    }
  }

  anterior() {
    if(this.indice > 0) {
      this.indice--;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  noticias = [
    {titulo: 'Noticia 1', 
    contenido: 'Contenido de la noticia 1',
    imagen: 'assets/img/noticia1.jpeg'
    },
    {titulo: 'Noticia 2',
    contenido: 'Contenido de la noticia 2',
    imagen: 'assets/img/noticia2.jpeg'
    },
    {titulo: 'Noticia 3',
    contenido: 'Contenido de la noticia 3',
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  libro = {
    titulo: "",
    autor: '',
    precio: 0,
    imagen: ''
  };

  libros: any[] = [];

  agregarLibro() {
    this.libros.push({ ...this.libro });
    this.libro = {
      titulo: '',
      autor: '',
      precio: 0,
      imagen: ''
    };

  }

  eliminarLibro(index: number) {
    this.libros.splice(index, 1);
  }
}
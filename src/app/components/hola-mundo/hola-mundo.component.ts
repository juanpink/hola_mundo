import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  public nombre : string = 'pensando...';
  constructor() {
    setTimeout(() => {
      this.nombre = 'Juanma';
    }, 3000);
  }
}

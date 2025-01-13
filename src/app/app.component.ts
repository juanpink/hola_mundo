import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { PieComponent } from './components/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, HolaMundoComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hola_mundo';
}

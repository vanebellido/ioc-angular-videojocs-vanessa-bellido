import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraFiltresComponent, FiltresGame } from './components/barra-filtres/barra-filtres.component';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { GAMES_MOCK } from './mocks/games.mock';
import { Game } from './models/game.model';

@Component({
  imports: [RouterOutlet, BarraFiltresComponent, LlistaElementsComponent, DatePipe],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  elements: Game[] = [];
  elementsFiltrats: Game[] = [];
  elementSeleccionat: Game | undefined = undefined;
  filtresActuals: FiltresGame = { text: '', categoria: 'Totes' };
  carregant = signal(true);

  constructor() {
    setTimeout(() => {
      this.elements = GAMES_MOCK;
      this.elementsFiltrats = GAMES_MOCK;
      this.carregant.set(false);
    }, 400);
  }

  actualitzaFiltres(filtres: FiltresGame): void {
    this.filtresActuals = filtres;
    const text = filtres.text.trim().toLocaleLowerCase('ca');

    this.elementsFiltrats = this.elements.filter((element) => {
      const categoriaCoincideix =
        filtres.categoria === 'Totes' || element.categoria === filtres.categoria;
      const textCoincideix =
        text === '' || this.conteText(element, text);
      return categoriaCoincideix && textCoincideix;
    });

    if (
      this.elementSeleccionat &&
      !this.elementsFiltrats.includes(this.elementSeleccionat)
    ) {
      this.elementSeleccionat = undefined;
    }
  }

  seleccionaElement(element: Game): void {
    this.elementSeleccionat = element;
  }

  tancaDetall(): void {
    this.elementSeleccionat = undefined;
  }

  private conteText(element: Game, text: string): boolean {
    const contingut = `${element.titol} ${element.descripcio}`.toLocaleLowerCase('ca');
    return contingut.includes(text);
  }
}
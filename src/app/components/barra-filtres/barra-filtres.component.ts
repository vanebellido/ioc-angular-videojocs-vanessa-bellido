import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaGame } from '../../models/game.model';

export interface FiltresGame {
  text: string;
  categoria: CategoriaGame | 'Totes';
}

@Component({
  imports: [FormsModule],
  selector: 'app-barra-filtres',
  styleUrl: './barra-filtres.component.scss',
  templateUrl: './barra-filtres.component.html',
})
export class BarraFiltresComponent {
  @Output() filtresCanviats = new EventEmitter<FiltresGame>();

  categories: Array<CategoriaGame | 'Totes'> = [
    'Totes',
    'Acció',
    'Aventura',
    'RPG',
    'Estratègia',
    'Esports',
  ];

  filtres: FiltresGame = {
    text: '',
    categoria: 'Totes',
  };

  aplicaFiltres(): void {
    this.filtresCanviats.emit({ ...this.filtres });
  }

  restableixFiltres(): void {
    this.filtres = { text: '', categoria: 'Totes' };
    this.aplicaFiltres();
  }
}
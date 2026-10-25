import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Game } from '../../models/game.model';
import { EtiquetaElementComponent } from '../etiqueta-element/etiqueta-element.component';

@Component({
  imports: [DatePipe, EtiquetaElementComponent],
  selector: 'app-targeta-element',
  styleUrl: './targeta-element.component.scss',
  templateUrl: './targeta-element.component.html',
})
export class TargetaElementComponent {
  @Input({ required: true }) element!: Game;
  @Input() seleccionada = false;
  @Output() selecciona = new EventEmitter<Game>();

  avisaSeleccio(): void {
    this.selecciona.emit(this.element);
  }
}
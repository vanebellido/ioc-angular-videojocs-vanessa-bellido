import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/game.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';

@Component({
  imports: [TargetaElementComponent],
  selector: 'app-llista-elements',
  styleUrl: './llista-elements.component.scss',
  templateUrl: './llista-elements.component.html',
})
export class LlistaElementsComponent {
  @Input({ required: true }) elements: Game[] = [];
  @Input() elementSeleccionatId?: number;
  @Output() selecciona = new EventEmitter<Game>();

  propagaSeleccio(element: Game): void {
    this.selecciona.emit(element);
  }
}
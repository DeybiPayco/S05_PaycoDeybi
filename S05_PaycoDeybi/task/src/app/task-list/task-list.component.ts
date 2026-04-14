import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tareas: Task[] = [];
  @Output() tareaEliminada = new EventEmitter<number>();
  @Output() tareaToggleada = new EventEmitter<number>();

  eliminar(id: number) {
    // Agregar clase de animación antes de eliminar
    const elemento = document.querySelector(`[data-task-id="${id}"]`);
    if (elemento) {
      elemento.classList.add('removing');
      setTimeout(() => {
        this.tareaEliminada.emit(id);
      }, 400);
    } else {
      this.tareaEliminada.emit(id);
    }
  }

  toggleCompletada(id: number) {
    // Agregar efecto visual inmediato
    const elemento = document.querySelector(`[data-task-id="${id}"]`);
    if (elemento) {
      elemento.classList.add('toggling');
      setTimeout(() => {
        elemento.classList.remove('toggling');
      }, 300);
    }
    this.tareaToggleada.emit(id);
  }

  // Método para detectar nuevas tareas
  trackByFn(index: number, item: Task): number {
    return item.id;
  }
}

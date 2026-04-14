import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  standalone: false,
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {

  nuevaTarea: string = '';
  isAdding: boolean = false;

  @Output() tareaAgregada = new EventEmitter<string>();

  agregar(){
    if (this.nuevaTarea.trim()) {
      this.isAdding = true;
      
      // Emitir la tarea después de un pequeño delay para el efecto visual
      setTimeout(() => {
        this.tareaAgregada.emit(this.nuevaTarea);
        this.nuevaTarea = '';
        this.isAdding = false;
        
        // Agregar clase de animación a la nueva tarea
        setTimeout(() => {
          const nuevasTareas = document.querySelectorAll('.task-item');
          if (nuevasTareas.length > 0) {
            const ultimaTarea = nuevasTareas[nuevasTareas.length - 1];
            ultimaTarea.classList.add('adding');
            setTimeout(() => {
              ultimaTarea.classList.remove('adding');
            }, 600);
          }
        }, 50);
      }, 200);
    }
  }

}

import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private nextId = 5;
  tareas: Task[] = [
    { id: 1, texto: 'Estudiar Angular', completada: false },
    { id: 2, texto: 'Hacer tarea', completada: false },
    { id: 3, texto: 'Comprar comida', completada: true },
    { id: 4, texto: 'Lavar ropa', completada: false }
  ];

  getTareas(): Task[] {
    return this.tareas;
  }

  agregarTarea(texto: string): void {
    if (texto.trim()) {
      const nuevaTarea: Task = {
        id: this.nextId++,
        texto: texto.trim(),
        completada: false
      };
      this.tareas.push(nuevaTarea);
    }
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  toggleCompletada(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }

  getTotalTareas(): number {
    return this.tareas.length;
  }

  getTareasCompletadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }

}
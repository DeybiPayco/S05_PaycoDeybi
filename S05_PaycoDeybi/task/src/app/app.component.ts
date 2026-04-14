import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  tareas: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tareas = this.taskService.getTareas();
  }

  agregarTarea(tarea: string) {
    this.taskService.agregarTarea(tarea);
  }

  eliminarTarea(id: number) {
    this.taskService.eliminarTarea(id);
  }

  toggleCompletada(id: number) {
    this.taskService.toggleCompletada(id);
  }

  get totalTareas(): number {
    return this.taskService.getTotalTareas();
  }

  get tareasCompletadas(): number {
    return this.taskService.getTareasCompletadas();
  }

}
// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CdkDropList,
  CdkDrag,
  CdkDropListGroup,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { CdkObserveContent } from '@angular/cdk/observers';
import { TasksService } from '../services/tasks-api.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDropList, CdkDropListGroup, CdkObserveContent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DefaultComponent {
  // constructor
  protected todoTasks: { description: string; title: string; id: number }[];
  protected completedTasks: { description: string; title: string; id: number }[];

  createTaskForm = this.formBuilder.group({
    title: '',
    description: ''
  });

  constructor(
    private readonly tasksService: TasksService,
    private readonly formBuilder: FormBuilder
  ) {

    this.refreshTaskLists();
  }

  dropTaskCard(event) {
    if (event.previousContainer === event.container) {
      return;
    }

    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

    this.tasksService.completeTask(event.container.data[0].id).subscribe((response) => {
      this.refreshTaskLists();
    });
  }

  refreshTaskLists() {
    this.todoTasks = [];
    this.completedTasks = [];

    this.tasksService.getMyTaskList().subscribe((response) => {
      let tasks = Object.values(response);

      for (let task of tasks) {
        if (task.status.code === 'to_do') {
          this.todoTasks.push(task);

          continue;
        }

        this.completedTasks.push(task);
      }
    });
  }

  onCreateTaskSubmit(): void {
    let formValue = this.createTaskForm.value;

    this.tasksService.createTask(formValue.title, formValue.description).subscribe((response) => {
      this.refreshTaskLists();
      this.createTaskForm.reset();
    });
  }

  deleteTask(taskId: number): void {
    this.tasksService.deleteTask(taskId).subscribe(response => {
      this.refreshTaskLists();
    });
  }
}

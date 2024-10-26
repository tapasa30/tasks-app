import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class TasksService {
  private url: string = `${environment.apiUrl}/api/tasks`;

  constructor(private httpClient: HttpClient) {}

  getMyTaskList() {
    return this.httpClient.get(`${this.url}/my-tasks`);
  }

  completeTask(taskId: number) {
    return this.httpClient.post(`${this.url}/${taskId}/complete`, {});
  }

  createTask(title: string, description: string|null = null) {
    return this.httpClient.post(`${this.url}`, {
      title,
      description,
    });
  }

  deleteTask(taskId: number) {
    return this.httpClient.delete(`${this.url}/${taskId}`);
  }
}

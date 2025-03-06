import { Injectable } from '@angular/core';
import { DailyTask } from '../models/daily.task.model';

@Injectable({
  providedIn: 'root'
})
export class DailyTaskService {
  private tasks: DailyTask[] = [];

  constructor() {}

  /**
   * Ottiene la lista delle consuntivazioni
   */
  getTasks(): DailyTask[] {
    return [...this.tasks]; // Restituisce una copia per evitare modifiche dirette
  }

  /**
   * Aggiunge una nuova consuntivazione
   */
  addTask(task: DailyTask): void {
    this.tasks.push(task);
  }

  /**
   * Cancella una consuntivazione
   */
  removeTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }

  /**
   * Aggiorna una consuntivazione esistente
   */
  updateTask(index: number, updatedTask: DailyTask): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index] = updatedTask;
    }
  }

  /**
   * Scarica i dati da una fonte esterna e aggiorna la lista
   */
  fetchTasks(callback: (data: DailyTask[]) => void): void {
    // Simulazione di un'API esterna (sostituire con una chiamata HTTP)
    setTimeout(() => {
      const mockData: DailyTask[] = [
        {
          giorno: new Date(),
          task: 'Sviluppo nuova feature',
          epica: 'EPIC-123',
          initiative: 'Initiative A',
          ore: 4,
          check: { 'Jira': true, 'GitHub': false }
        },
        {
          giorno: new Date(),
          task: 'Fix bug critico',
          epica: 'EPIC-456',
          initiative: 'Initiative B',
          ore: 2,
          check: { 'Jira': true, 'GitHub': true }
        }
      ];
      this.tasks = mockData;
      callback(this.tasks);
    }, 1000); // Simulazione di ritardo di rete
  }

  /**
   * Salva i dati su una fonte esterna con una callback
   */
  saveTasks(callback: (success: boolean) => void): void {
    // Simulazione di un'API di salvataggio
    setTimeout(() => {
      console.log('Dati salvati:', this.tasks);
      callback(true);
    }, 1000);
  }
}

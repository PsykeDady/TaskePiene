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
   * Scarica i dati da una fonte esterna tramite una callback generica
   */
  fetchTasks(callback: () => DailyTask[]): void {
    this.tasks = callback(); // Esegue la callback e aggiorna la lista
  }

  /**
   * Salva i dati su una fonte esterna tramite una callback generica
   */
  saveTasks(callback: (data: DailyTask[]) => void): void {
    callback(this.tasks); // Passa i dati attuali alla funzione di salvataggio
  }

  /**
   * Mock di dati di esempio, da usare come callback in fetchTasks
   */
  mockCallback(): DailyTask[] {
    return [
      {
        giorno: new Date(),
        task: 'Sviluppo nuova feature',
        epica: 'EPIC-123',
        initiative: 'Initiative A',
        ore: 4,
        check: { 'Jira': true, 'WD': false }
      },
      {
        giorno: new Date(),
        task: 'Fix bug critico',
        epica: 'EPIC-456',
        initiative: 'Initiative B',
        ore: 2,
        check: { 'Jira': true, 'WD': true }
      }
    ];
  }
}

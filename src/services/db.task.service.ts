import { Injectable } from '@angular/core';
import { DbTaskModel } from '../models/db.task.model';

@Injectable({
  providedIn: 'root'
})
export class DbTaskService {
  private dbTasks: DbTaskModel[] = [];

  constructor() {}

  /**
   * Ritorna una copia dei task DB
   */
  getTasks(): DbTaskModel[] {
    return [...this.dbTasks];
  }

  /**
   * Aggiunge un task
   */
  addTask(task: DbTaskModel): void {
    this.dbTasks.push(task);
  }

  /**
   * Rimuove un task per indice
   */
  removeTask(index: number): void {
    if (index >= 0 && index < this.dbTasks.length) {
      this.dbTasks.splice(index, 1);
    }
  }

  /**
   * Aggiorna un task esistente
   */
  updateTask(index: number, updatedTask: DbTaskModel): void {
    if (index >= 0 && index < this.dbTasks.length) {
      this.dbTasks[index] = updatedTask;
    }
  }

  /**
   * Carica i task da sorgente esterna
   */
  fetchTasks(callback: () => DbTaskModel[]): void {
    this.dbTasks = callback();
  }

  /**
   * Salva i task verso sorgente esterna
   */
  saveTasks(callback: (data: DbTaskModel[]) => void): void {
    callback(this.dbTasks);
  }

  /**
   * Dati mock di esempio
   */
  mockCallback(): DbTaskModel[] {
    return [
      {
        Task: 'Controllo accessi DB',
        Epica: 'EPIC-102',
        Initiative: 'Sicurezza',
        CDC: 'CDC001',
        Scadenza: new Date('2025-03-31')
      },
      {
        Task: 'Pulizia dati legacy',
        Epica: 'EPIC-220',
        Initiative: 'Refactoring DB',
        CDC: 'CDC002',
        Scadenza: new Date('2025-04-15')
      }
    ];
  }
}

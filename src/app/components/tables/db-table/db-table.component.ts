import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DbTaskModel } from '../../../../models/db.task.model';
import { DbTaskService } from '../../../../services/db.task.service';  

@Component({
  selector: 'app-db-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './db-table.component.html',
  styleUrls: ['./db-table.component.scss']
})
export class DbTableComponent implements OnInit {
  tasks: DbTaskModel[] = [];

  constructor(private dbTaskService: DbTaskService) {}

  ngOnInit() {
    this.dbTaskService.fetchTasks(() => this.dbTaskService.mockCallback());
    this.tasks = this.dbTaskService.getTasks();
  }

  editTask(task: DbTaskModel) {
    console.log('Modifica DB Task - Da implementare:', task);
  }

  deleteTask(task: DbTaskModel) {
    console.log('Cancellazione DB Task - Da implementare:', task);
  }
}

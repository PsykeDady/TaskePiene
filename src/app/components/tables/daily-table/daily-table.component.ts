import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CheckMap, DailyTask, Piattaforma } from '../../../../models/daily.task.model';
import { DailyTaskService } from '../../../../services/daily.task.service';


@Component({
  selector: 'app-daily-table',
  templateUrl: './daily-table.component.html',
  imports : [CommonModule],
  styleUrls: ['./daily-table.component.scss']
})
export class DailyTableComponent implements OnInit {
  tasks: DailyTask[] = [];

  constructor(private dailyTaskService: DailyTaskService) {}

  ngOnInit() {
    // Carica i dati mockati all'inizio
    this.dailyTaskService.fetchTasks(() => this.dailyTaskService.mockCallback());
    this.tasks = this.dailyTaskService.getTasks();
  }

  editTask(dailyTask :DailyTask) {
    console.log('Modifica task - Da implementare');
  }

  deleteTask(dailyTask :DailyTask) {
    console.log('Cancellazione task - Da implementare');
  }

  getCheckKeys(check: CheckMap): Piattaforma[] {
    return Object.keys(check) as Piattaforma[];
  }
}

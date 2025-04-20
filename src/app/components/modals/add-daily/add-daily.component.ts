import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DailyTask } from '../../../../models/daily.task.model';
import { DbTaskService } from '../../../../services/db.task.service';

@Component({
  selector: 'app-add-daily',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-daily.component.html',
  styleUrls: ['./add-daily.component.scss']
})
export class AddDailyComponent {
  @Output() close = new EventEmitter<void>();

  platforms = ['Jira', 'EH', 'WD'];


  form: FormGroup;

  constructor(private readonly fb: FormBuilder, private dbTaskService: DbTaskService) {
    this.form = this.fb.group({
      task: [''],
      epica: [{ value: '', disabled: true }],
      initiative: [{ value: '', disabled: true }],
      giorno: [new Date()],
      ore: [0],
      check: this.fb.group({
        Jira: [false],
        EH: [false],
        WD: [false]
      })
    });
  }

  onSave() {
    if (this.form.valid) {
      const dailyTask: DailyTask = this.form.getRawValue();
      console.log('Salva consuntivazione:', dailyTask);
      this.close.emit();
    }
  }

  onClose() {
    this.close.emit();
  }
}

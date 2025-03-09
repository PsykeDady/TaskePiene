import { Component } from '@angular/core';
import { DailyTableComponent } from "../components/tables/daily-table/daily-table.component";

@Component({
  selector: 'app-current-view',
  imports: [DailyTableComponent],
  templateUrl: './current-view.component.html',
  styleUrl: './current-view.component.scss'
})
export class CurrentViewComponent {

  currentMonth: string = "";
  currentMonthLabel: string = "";

  constructor() { }

  ngOnInit() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthNames = [
      'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
      'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
    ];
    this.currentMonth = `${year}/${month + 1}`;
    this.currentMonthLabel = `${monthNames[month]}`;
  }

  // Metodo per gestire il click del pulsante +
  onAddClick() {
    console.log('Azione di aggiunta');
  }
}

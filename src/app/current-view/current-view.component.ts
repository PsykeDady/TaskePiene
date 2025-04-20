import { Component } from '@angular/core';
import { DailyTableComponent } from "../components/tables/daily-table/daily-table.component";
import { AddDailyComponent } from '../components/modals/add-daily/add-daily.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-view',
  imports: [DailyTableComponent,AddDailyComponent, CommonModule],
  templateUrl: './current-view.component.html',
  styleUrl: './current-view.component.scss'
})
export class CurrentViewComponent {

  currentMonth: string = "";
  currentMonthLabel: string = "";
  showModal = true;


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

  onAddClick() {
    console.log('Apertura modale per aggiungere una nuova consuntivazione');
    console.log(this.showModal)
    this.showModal = true;
  }

  onModalClose() {
    console.log('Chiusura modale per aggiungere una nuova consuntivazione');
    console.log(this.showModal)
    this.showModal = false;
  }
}

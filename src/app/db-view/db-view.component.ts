import { Component } from '@angular/core';
import { DbTableComponent } from '../components/tables/db-table/db-table.component';

@Component({
  selector: 'app-db-view',
  standalone: true,
  imports: [DbTableComponent],
  templateUrl: './db-view.component.html',
  styleUrl: './db-view.component.scss'
})
export class DbViewComponent {

  constructor() {}

  onAddClick() {
    console.log('Azione di aggiunta per attività DB');
  }
}

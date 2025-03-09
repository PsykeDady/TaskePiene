import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import infoOptions, { InfoOption } from '../../../models/info.options';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [RouterModule, CommonModule],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output() toggleEvent = new EventEmitter<boolean>();

  @Input() isOpen = false;

  infoOptions: InfoOption[] = infoOptions;

  toggleMenu(){
    this.isOpen=!this.isOpen;
    this.toggleEvent.emit(this.isOpen)
  }
}

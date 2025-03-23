import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from "./components/modals/sidemenu/sidemenu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TaskePiene';
  menuOpen =false; 

  pageTitle= "Qui ci sarà il nome della rotta";

  toggleMenu() {
    this.menuOpen=!this.menuOpen;
  }

  menuEvent(event:boolean) {
    this.menuOpen=event;
  }

}

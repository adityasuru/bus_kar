import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bus-kar';
  navbarOpen = false;
  showLogin: boolean = false;


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openLogin($event) {
    this.showLogin = true;
  }

  onLoginClose($event) {
    this.showLogin = false;
  }
}

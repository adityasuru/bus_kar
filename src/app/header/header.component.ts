import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showDropdown: boolean= false;
  @Output() openLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showLoginDropdown() {
    this.showDropdown = !this.showDropdown;

  }

  onOpenLogin(){
    this.showDropdown = false;
    this.openLogin.emit(true);
  }

}

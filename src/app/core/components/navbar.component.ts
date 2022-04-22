import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark text-white">

    <a class="navbar-brand" routerLink="/home">LOGO</a>

    <ul class="navbar-nav">
      <a class="nav-item nav-link" routerLink="/home" routerLinkActive="active">Home</a>
      <a class="nav-item nav-link" routerLink="/settings" routerLinkActive="active">Settings</a>
      <a class="nav-item nav-link" routerLink="/users" routerLinkActive="active">Users</a>
    </ul>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <div class="btn btn-group">
      <button routerLink="./profile" routerLinkActive="btn-dark" class="btn btn-light">Profile</button>
      <button routerLink="./configuration" routerLinkActive="btn-dark" class="btn btn-light">Configuration</button>
    </div>

    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class SettingsComponent { }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      profile works!
    </p>
    
    <button class="btn btn-light" routerLink="../configuration">Go to Configuration</button>
  `,
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
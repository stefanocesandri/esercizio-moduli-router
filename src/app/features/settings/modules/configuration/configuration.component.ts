import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  template: `
    <p>
      configuration works!
    </p>

    <button class="btn btn-light" routerLink="../profile">Go to Profile</button>
  `,
  styles: [
  ]
})
export class ConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//how to import ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-bootstrap-app';
  active: string = ''; // Initialize the 'active' property
}

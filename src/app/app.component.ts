import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabNavPanel } from "@angular/material/tabs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTabNavPanel, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-with-asd';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabNav, MatTabLink, MatTabNavPanel } from "@angular/material/tabs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabNav, MatTabLink, MatTabNavPanel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-with-asd';
}

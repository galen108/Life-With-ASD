import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabGroup, MatTab } from '@angular/material/tabs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabGroup, MatTab],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-with-asd';
}

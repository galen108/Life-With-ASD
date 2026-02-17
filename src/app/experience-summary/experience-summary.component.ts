import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-experience-summary',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, RouterLink],
  templateUrl: './experience-summary.component.html',
  styleUrl: './experience-summary.component.css'
})
export class ExperienceSummaryComponent {

}

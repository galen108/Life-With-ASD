import { Component, ViewEncapsulation } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'experience-summary',
  standalone: true,
  imports: [ MatCard,
            MatCardHeader,
            MatCardContent,
            RouterLink ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './experience-summary.component.html',
  styleUrl: './experience-summary.component.css'
})
export class ExperienceSummaryComponent {

}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatTabGroup, MatTab, MatTabNav, MatTabLink, MatTabNavPanel } from '@angular/material/tabs';
import { ExperienceSummaryComponent } from './experience-summary/experience-summary.component';
import { LifeAreasComponent } from './life-areas/life-areas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MatCard,
              MatCardHeader,
              MatCardContent,
              MatTabGroup,
              MatTab,
              MatTabNav,
              MatTabLink,
              MatTabNavPanel,
              RouterLink,
              RouterLinkActive,
              RouterOutlet,
              ExperienceSummaryComponent,
              LifeAreasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-with-asd';
  protected links: any;
  protected activeLink: any;
}

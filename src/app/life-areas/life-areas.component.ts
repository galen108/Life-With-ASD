import { Component, ViewEncapsulation } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription} from "@angular/material/expansion";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'life-areas',
  standalone: true,
  imports: [ MatCard,
              MatCardHeader,
              MatCardContent,
              MatExpansionPanel,
              MatExpansionPanelHeader,
              MatExpansionPanelTitle,
              MatExpansionPanelDescription,
              RouterLink],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './life-areas.component.html',
  styleUrl: './life-areas.component.css'
})
export class LifeAreasComponent {

}

import { Component } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription} from "@angular/material/expansion";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-specific-life-modules',
  standalone: true,
  imports: [MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, RouterLink],
  templateUrl: './life-areas.component.html',
  styleUrl: './life-areas.component.css'
})
export class LifeAreasComponent {

}

import { Routes } from '@angular/router';
import {ExperienceSummaryComponent} from "./experience-summary/experience-summary.component";
import {LifeAreasComponent} from "./life-areas/life-areas.component";

export const routes: Routes = [
{path: 'experience-summary', component: ExperienceSummaryComponent},
{path: 'life-areas', component: LifeAreasComponent}];

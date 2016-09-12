import { Routes, RouterModule } from '@angular/router';

// Views
import { AnimalsComponent } from './animals.component';
import { PlantsComponent } from './plants.component';
import { StrategyComponent } from './strategy.component';

export const ROUTES: Routes = [
  { path: '', component: AnimalsComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: '**', component: AnimalsComponent },
];

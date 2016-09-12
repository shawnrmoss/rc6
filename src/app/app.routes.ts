import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './modules/library';

// Views
import { AnimalsView } from './../../views/animals';
import { HomeView } from './views/home';
import { NoContentView } from './views/no-content';
import { PlantsView } from './views/plants';
import { StrategyView } from './views/strategy';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeView },
  { path: 'home', component: HomeView },
  { path: 'library/...', component: LibraryComponent },
  { path: '**', component: NoContentView },
];

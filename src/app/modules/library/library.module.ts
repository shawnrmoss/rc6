import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES } from './library.routes';

// LibraryComponent is our top level component
import { LibraryComponent } from './library.component';
import { PlantsComponent } from './plants.component';
import { AnimalsComponent } from './animals.component';
import { StrategyComponent } from './strategy.component';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [LibraryComponent],
    declarations: [
        LibraryComponent,
        PlantsComponent,
        AnimalsComponent,
        StrategyComponent
    ],
    imports: [ // import Angular's modules    
        RouterModule.forRoot(ROUTES, { useHash: true })
    ]
})
export class LibraryModule {
    constructor() { }
}


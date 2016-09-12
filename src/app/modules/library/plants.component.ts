/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'plants',
    encapsulation: ViewEncapsulation.None,
    template: `<h1>Plants</h1>`
})
export class PlantsComponent {
    constructor() {
    }
}
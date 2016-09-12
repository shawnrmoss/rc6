/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'animals',
    encapsulation: ViewEncapsulation.None,
    template: `<h1>Animals</h1>`
})
export class AnimalsComponent {
    constructor() {
    }
}
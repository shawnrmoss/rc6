/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'strategy',
    encapsulation: ViewEncapsulation.None,
    template: `<h1>strategy</h1>`
})
export class StrategyComponent {
    constructor() {
    }
}
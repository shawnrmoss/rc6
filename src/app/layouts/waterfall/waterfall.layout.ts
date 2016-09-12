import { Component, OnInit, AfterViewChecked } from '@angular/core';
declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'waterfall-layout',
    template: require('./waterfall.template.html'),
    styles: [require('./waterfall.style.css')]
})
export class WaterfallLayout implements OnInit, AfterViewChecked {

    constructor() { }

    ngOnInit() {

    }

    ngAfterViewChecked() {
        componentHandler.upgradeAllRegistered();
    }
}

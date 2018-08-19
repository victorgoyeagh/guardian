import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
    public searchTerm: string = undefined;

    constructor() { }

    ngOnInit() {
    }

    performSearch(value: string) {
        this.searchTerm = value;
    }
}

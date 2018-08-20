import { Component, OnInit } from '@angular/core';
import { SearchInputValues } from './../../modules/search/models/search.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
    public searchInputValues: SearchInputValues;

    constructor() { }

    ngOnInit() {
    }

    performSearch(value: SearchInputValues) {
        console.log(value)
        this.searchInputValues = value;
    }
}

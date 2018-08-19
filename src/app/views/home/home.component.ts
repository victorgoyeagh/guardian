import { Component, OnInit } from '@angular/core';
import { SearchInputValues } from './../../modules/search/models/search.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
    private SearchInputValues = <SearchInputValues>{
        Keyword: undefined,
        Section: undefined,
        Path: 'search'
    }

    constructor() { }

    ngOnInit() {
    }

    performSearch(value: SearchInputValues) {
        this.SearchInputValues = value;
    }
}

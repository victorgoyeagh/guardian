import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../../services/sections.service';
import { ApiData, Section, ApiResponse } from './../../../../models/init-data.model';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
    public sections: Array<Section>;
    public searchTerm: string = undefined;

    constructor(
        private sectionsService: SectionsService
    ) { }

    ngOnInit() {
        this.sectionsService.getInitialData().subscribe((sections: Array<Section>) => {
            this.sections = sections;
            console.log(this.sections);
        })
    }

    performSearch(value: string) {
        this.searchTerm = value;
    }
}

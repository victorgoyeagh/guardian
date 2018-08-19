import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, EventEmitter, } from '@angular/core';
import { SectionsService } from '../../services/sections.service';
import { ApiData, Section, ApiResponse } from './../../../../models/init-data.model';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DisplayType } from '../../models/sections.model';
import { SearchInputValues } from './../../../search/models/search.model';
@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss'],
    inputs: ['SectionsDisplayType'],
    outputs: ['OutputBroadcastSection']
})
export class SectionsComponent implements OnInit, AfterViewInit {
    public sections: Array<Section>;
    public searchTerm: string = undefined;
    public searchSection: string = undefined;
    public DisplayType = DisplayType;
    public sectionDisplayType: DisplayType = DisplayType.List;
    public OutputBroadcastSection = new EventEmitter<string>();
    public sectionList = new FormGroup({
        selectSectionList: new FormControl()
    });
    private defaultSelected: string = '';

    @ViewChild('#selectSectionList') selectSectionList: ElementRef;

    @Input() set SectionsDisplayType(value: DisplayType) {
        this.sectionDisplayType = value
    }

    constructor(
        private sectionsService: SectionsService
    ) { }

    ngOnInit() {
        this.sectionsService.getSectionsData('sections').subscribe((sections: Array<Section>) => {
            this.sections = sections;
        });
    }

    ngAfterViewInit() {
        this.sectionList.setValue({
            selectSectionList: this.defaultSelected
        })
        
        let initValue = this.sectionList.controls.selectSectionList.value;
        this.OutputBroadcastSection.emit(initValue);
    }

    performSearch(value: string) {
        this.searchTerm = value;
    }

    saveSelectedValue(event: Event) {
        let selectCtrl = <HTMLSelectElement>event.target;
        this.OutputBroadcastSection.emit(selectCtrl.value);
    }
}

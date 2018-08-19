import { Component, OnInit, AfterViewInit, OnDestroy, Output, ViewChild, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { DisplayType } from '../../../sections/models/sections.model';
import { SearchInputValues } from './../../models/search.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    outputs: ['OutputSearchTerm']
})
export class SearchComponent implements OnDestroy, AfterViewInit {
    public DisplayType = DisplayType;
    private subs: Subscription;
    private searchTerm: string;
    private searchInputValues: SearchInputValues = {
        Keyword: undefined,
        Section: undefined,
        Path: 'search'
    };
    private searchSection: string;
    private performDynamicSearch: boolean = true;
    public fmSearchPanel = new FormGroup({
        txtSearch: new FormControl('')
    })

    @Output() OutputSearchTerm = new EventEmitter<any>();
    @ViewChild("txtSearch") txtSearch: ElementRef;

    constructor(
        private searchService: SearchService
    ) {
    }
    
    ngAfterViewInit() {

        this.subs = fromEvent(<HTMLInputElement>this.txtSearch.nativeElement, "input")
            .pipe(
                map(
                    (event: Event) => (<HTMLInputElement>event.target).value
                ),
                debounceTime(800)
            )
            .subscribe((value: string) => {
                
                if (!this.performDynamicSearch) {
                    this.searchTerm = value;
                } else {
                    //for dynamic search
                    this.searchTerm = value;
                    this.searchService.onSearchValueChanged(this.getSearchValues());
                }
            }
        )
    }

    getSearchValues(){
        this.searchInputValues = <SearchInputValues>{
            Keyword: this.searchTerm,
            Section: this.searchSection,
            Path: 'search'
        }

        return this.searchInputValues;
    }

    updateSection(value: string){
        this.searchSection = value;
        this.searchService.onSearchValueChanged(this.getSearchValues());
    }

    performSearch() {
        this.OutputSearchTerm.emit(this.getSearchValues());
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}

import { Component, OnInit, AfterViewInit, OnDestroy, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    outputs: ['outputSearchTerm']
})
export class SearchComponent implements OnDestroy, AfterViewInit {
    private subs: Subscription;
    private searchTerm: string;
    private performDynamicSearch: boolean = true;
    public fmSearchPanel = new FormGroup({
        txtSearch: new FormControl('')
    })

    @Output() outputSearchTerm = new EventEmitter<any>();
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
                    //this.outputSearchTerm.emit(value);
                    this.searchService.onSearchValueChanged(value);
                }
            }
        )
    }

    PerformSearch() {
        this.outputSearchTerm.emit(this.searchTerm);
    }

    UpdateDynamicSearch() {
        this.performDynamicSearch = !this.performDynamicSearch;
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}

import { Injectable, ElementRef } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { map, debounceTime, distinct } from 'rxjs/operators';
import { StateService } from '../../../state/services/state.service';
import { Http, Response as HttpResponse } from '@angular/http';
import { GlobalService } from '../../../services/global.service';
import * as Rx from 'rxjs';
import { ApiData, Section, ApiResponse } from './../../../models/init-data.model';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    public searchValue = new BehaviorSubject<string>('');

    constructor(
        private globalService: GlobalService,
        private stateService: StateService,
        private http: Http
    ) { }

    onSearchValueChanged(value: string) {
        this.searchValue.next(value);
    }
    
    getTableData(){
        return this.http.get(this.globalService.getUrl('search')).switchMap((value: HttpResponse) => {
            let response = <ApiResponse>value.json();
            let data = <ApiData>response.response; 
            return Rx.of(<Array<Section>>data.results);
        })
    }

}

import { Injectable, ElementRef } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { map, debounceTime, distinct } from 'rxjs/operators';
import { StateService } from '../../../state/services/state.service';
import { Http, Response as HttpResponse } from '@angular/http';
import { GlobalService } from '../../../services/global.service';
import * as Rx from 'rxjs';
import { ApiData, Section, ApiResponse } from './../../../models/init-data.model';
import { SearchInputValues } from './../../search/models/search.model';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    public searchValue = new BehaviorSubject<SearchInputValues>(undefined);

    constructor(
        private globalService: GlobalService,
        private stateService: StateService,
        private http: Http
    ) { }

    onSearchValueChanged(value: SearchInputValues) {
        this.searchValue.next(value);
    }
    
    getTableData(searchValues: SearchInputValues){
        
        let url = this.globalService.getApiUrl(searchValues);
        console.log(url);
        
        return this.http.get(url).switchMap((value: HttpResponse) => {
            let response = <ApiResponse>value.json(),
                data = <ApiData>response.response; 
            return Rx.of(<Array<Section>>data.results);
        })
    }

}

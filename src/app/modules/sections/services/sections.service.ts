import { Injectable } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { StateService } from '../../../state/services/state.service';
import { Http, Response as HttpResponse } from '@angular/http';
import * as Rx from 'rxjs';
import { ApiData, Section, ApiResponse } from './../../../models/init-data.model';


@Injectable({
    providedIn: 'root'
})
export class SectionsService {

    constructor(
        private globalService: GlobalService,
        private stateService: StateService,
        private http: Http
    ) {}

    getSectionsData(path: string) {
       return this.http.get(this.globalService.getApiUrl({
           Section: undefined,
           Keyword: undefined,
           Path: 'sections'
       })).switchMap((value: HttpResponse) => {
           let response = <ApiResponse>value.json();
           let data = <ApiData>response.response; 
           return Rx.of(<Array<Section>>data.results);
       });
    }
}

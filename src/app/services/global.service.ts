import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { SearchInputValues } from './../modules/search/models/search.model';


@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    private url: string;
    private key: string;
    private apiKey: string;
    public domain: string = undefined;

    constructor(
    ) {
        this.url = environment.config.api.url;
        this.key = environment.config.api.credentials.key;
        this.apiKey = environment.config.api.credentials.value;
    } 

    getApiUrl(inputValues: SearchInputValues){
        this.domain = this.url + inputValues.Path + "?"; 
        this.domain += this.key + "=" + this.apiKey; 
        this.domain += (inputValues.Page) ? "&page=" + inputValues.Page : ""; 
        this.domain += (inputValues.Section) ? "&section=" + inputValues.Section : "";
        this.domain += (inputValues.Keyword) ? "&q=" + inputValues.Keyword : "";
        return this.domain;
    }

}

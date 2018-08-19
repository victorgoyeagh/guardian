import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    private url: string;
    private key: string;
    private apiKey: string;
    public domain: string = undefined;

    constructor() {
        this.url = environment.config.api.url;
        this.key = environment.config.api.credentials.key;
        this.apiKey = environment.config.api.credentials.value;
    } 

    getUrl(path: string){

       return this.domain = this.url + path + "?" + this.key + "=" + this.apiKey;
    }
}

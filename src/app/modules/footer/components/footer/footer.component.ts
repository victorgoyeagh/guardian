import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public year: string;
    public date: Date;
    public siteName: string = environment.config.siteName;

    constructor() { }

    ngOnInit() {
        this.year = new Date().getFullYear().toString();
    }

}

import { Component } from '@angular/core';
import { StateService } from './state/services/state.service';
import { SectionsService } from './modules/sections/services/sections.service';
import { Section } from './models/init-data.model';
import { BehaviorSubject } from 'rxjs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    constructor(
        private stateService: StateService,
        private sectionsService: SectionsService
    ) {
        this.getInitialData();
    }

    getInitialData() {
        this.sectionsService.getSectionsData('sections').subscribe((sections: Array<Section>) => {
            this.stateService.storeSections(sections);
        });
    }
}

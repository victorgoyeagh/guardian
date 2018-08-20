import { Injectable } from '@angular/core';
import { Section } from '../../models/init-data.model';
import { InitialDataActions } from '../state.actions';
import { NgRedux } from 'ng2-redux';
import * as Rx from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    public initLoadDataCompleted: Rx.BehaviorSubject<boolean> =  new Rx.BehaviorSubject<boolean>(false);

    constructor(
        private store: NgRedux<any>
    ) { }

    storeSections(data: Array<Section>) {

        this.store.dispatch({
            type: InitialDataActions.SAVE_INIT_DATA,
            payload: data
        });

        this.initLoadDataCompleted.next(true);
    }

    retrieveSectionsFromState() {
        return this.store.getState().initData;
    }
}

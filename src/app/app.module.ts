import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// routing
import { Routing } from './routes/routes';

// state
import { initReducerInitState, initReducer } from './state/state.store';
import { NgRedux, NgReduxModule } from 'ng2-redux';

// pages
import { HomePageComponent } from './views/home/home.component';
import { PageNotFoundPageComponent } from './views/page-not-found/page-not-found.component';

// modules
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { SearchModule } from './modules/search/search.module';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        PageNotFoundPageComponent
    ],
    imports: [
        Routing,
        SearchModule,
        BrowserModule,
        NgReduxModule,
        HeaderModule,
        FooterModule
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    constructor(
        private _store: NgRedux<any>
    ) {
        this._store.configureStore(initReducer, {});
    }
}

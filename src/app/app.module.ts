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
import { SectionsModule } from './modules/sections/sections.module';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    NgReduxModule,
    SectionsModule,
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

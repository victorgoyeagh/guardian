import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';
import { MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { SearchService } from './services/search.service';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SectionsModule } from '../sections/sections.module';

@NgModule({
    imports: [
        SectionsModule,
        RouterModule,
        NoopAnimationsModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        CdkTableModule,
        MatSortModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
        SearchService
    ],
    exports: [
        RouterModule,
        NoopAnimationsModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        CdkTableModule,
        MatSortModule,
        MatTableModule,
        SearchComponent,
        ResultsComponent
    ],
    declarations: [
        SearchComponent,
        ResultsComponent
    ]
})
export class SearchModule { }

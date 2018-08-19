import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Section } from "./../../../../models/init-data.model";
import { distinct, distinctUntilChanged, tap } from 'rxjs/operators';
import { RouterLink, Router } from "@angular/router";
import { SearchInputValues } from './../../../search/models/search.model';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
    inputs: ['inputSearchValues']
})
export class ResultsComponent implements OnInit, AfterViewInit {
    private searchInputValues: SearchInputValues = undefined;
    public itemsPerPage: number = 10;
    public pageLength: number = 1000;
    public pageNo: number = 1;
    public displayedColumns: Array<string> = ["date", "section", "name"];
    public currentData: any;
    public dataSource: MatTableDataSource<Section> = new MatTableDataSource<Section>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Input() set inputSearchValues(value: SearchInputValues) {
        this.searchInputValues = value;
        this.searchInputValues.Page = this.pageNo;
        this.GetAndApplyData(this.searchInputValues);
    }

    constructor(
        private searchService: SearchService
    ) {
    }

    ngOnInit() {
        //
        this.searchService.searchValue.pipe(
            distinct(),
            distinctUntilChanged()
        ).subscribe((value) => {
            if (value) {
                console.log(value);
                this.GetAndApplyData(value);
            }
        })
    }

    ngAfterViewInit() {

        this.paginator.page
            .pipe(
            )
            .subscribe((value) => {
                console.log(value);

                /*
                this.dataSource.paginator.pageSize = value["pageSize"];
                this.dataSource.paginator.pageIndex = value["pageIndex"];
                this.dataSource.paginator.length = value["length"];
                
                let searchInputValues = this.searchInputValues;
                searchInputValues.Page = parseInt(value["pageIndex"].toString()) + 1;
                this.GetAndApplyData(searchInputValues);
                */
            }
        );


        /*this.dataSource.paginator.pageSize = this.itemsPerPage;
        this.dataSource.paginator.pageIndex = this.pageNo;
        this.dataSource.paginator.length = this.pageLength;*/
    }

    GetAndApplyData(inputValues: SearchInputValues) {

        this.searchService.getTableData(inputValues)
            .pipe(
                distinct()
            )
            .subscribe((data) => {
                console.log(data);
                this.currentData = data;
                this.loadData(this.currentData);
            });
    }

    loadData(data) {

        this.dataSource = new MatTableDataSource<Section>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.pageSize = this.itemsPerPage;
        this.dataSource.paginator.pageIndex = this.pageNo;
        this.dataSource.paginator.length = this.pageLength;
    }
}

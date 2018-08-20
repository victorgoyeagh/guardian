import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Section } from "./../../../../models/init-data.model";
import { distinct, distinctUntilChanged, tap } from 'rxjs/operators';
import { RouterLink, Router } from "@angular/router";
import { SearchInputValues } from './../../../search/models/search.model';
import { ApiData } from './../../../../models/init-data.model';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
    inputs: ['inputSearchValues']
})
export class ResultsComponent implements OnInit, AfterViewInit {
    public Math = Math;
    private searchInputValues: SearchInputValues = undefined;
    public itemsPerPage: number = 10;
    public pageLength: number = 100;
    public pageNo: number = 0;
    public totalPages: number = undefined;
    public displayedColumns: Array<string> = ["date", "section", "name"];
    public currentData: any;
    public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
    private sectionsData: ApiData;
    public matPaginator: MatPaginator;

    @ViewChild('matPaginator')
    set paginator(value: MatPaginator) {
        if (value) {
            //value.length = this.pageLength;
            this.matPaginator = value;

            console.log(this.matPaginator);

            this.matPaginator.page
                .subscribe((value) => {
                    console.log(value);
                    //this.dataSource.paginator.length = this.sectionsData.total;
                    //this.dataSource.paginator.pageSize = this.itemsPerPage;
                    //this.dataSource.paginator.pageIndex = this.pageNo;

                    this.pageNo =  parseInt(value['pageIndex'])-1;
                    this.itemsPerPage = parseInt(value['pageSize']);
                    this.pageLength = this.sectionsData.total;
                    
                    console.log(this.searchInputValues)

                    this.searchInputValues['Page'] =  parseInt(value['pageIndex']);
                    this.searchInputValues['PageSize'] = parseInt(value['pageSize']);
                    this.searchInputValues['Page'] = this.sectionsData.total;

                }
            );

        }
    }

    @Input() set inputSearchValues(value: SearchInputValues) {
        this.searchInputValues = value;
        //this.searchInputValues.Page = this.pageNo;
        console.log(value);
        //this.GetAndApplyData(this.searchInputValues);
    }

    constructor(
        private searchService: SearchService
    ) {
    }

    ngOnInit() {

        this.dataSource.paginator = this.matPaginator;
    }

    ngAfterViewInit() {

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

    GetAndApplyData(inputValues: SearchInputValues) {
        console.log(inputValues);
        this.searchService.getTableData(inputValues)
            .pipe(
            )
            .subscribe((data: ApiData) => {
                console.log(data);
                this.sectionsData = data;
                this.pageLength = this.sectionsData.total;
                this.pageNo = this.sectionsData.currentPage -1;
                this.currentData = <Array<Section>>data.results;
                this.loadData(this.currentData);
            });
    }

    loadData(data: Array<Section>) {

        this.dataSource = new MatTableDataSource(data);

        if (this.dataSource.paginator) {
            let len = Math.ceil(this.sectionsData.total/this.itemsPerPage);
            console.log(len);
            this.dataSource.paginator.length = len;
            this.dataSource.paginator.pageSize = this.itemsPerPage;
            this.dataSource.paginator.pageIndex = this.pageNo;
        } 
    }
}

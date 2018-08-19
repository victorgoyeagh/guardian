import { Component, OnInit, Input, OnChanges, SimpleChange, AfterViewInit, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Section } from "./../../../../models/init-data.model";
import { distinct, distinctUntilChanged, tap } from 'rxjs/operators';
import { RouterLink, Router } from "@angular/router";

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
    inputs: ['inputSearchTerm']
})
export class ResultsComponent implements OnInit, AfterViewInit {
    private searchTerm: string = undefined;
    public itemsPerPage: number = 10;
    public pageNo: number = 1;
    public displayedColumns: Array<string> = ["date", "name"];
    public currentData: any;
    public dataSource: MatTableDataSource<Section> = new MatTableDataSource<Section>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Input() set inputSearchTerm(value: string) {
        this.searchTerm = value;
    }

    constructor(
        private searchService: SearchService
    ) {
    }

    ngOnInit() {

        this.searchService.searchValue.pipe(
            distinct(),
            distinctUntilChanged()
        ).subscribe((value) => {
            console.log(value);
        })

    }

    ngAfterViewInit() {

        this.searchService.getTableData()
        .pipe(
            distinct()
        )
        .subscribe((data) => {
            console.log(data);
            this.currentData = data;

            this.dataSource = new MatTableDataSource<Section>(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageSize = this.itemsPerPage;
            this.dataSource.paginator.pageIndex = this.pageNo;
        });


        this.paginator.page
            .pipe(
                tap(() => this.loadData())
            )
            .subscribe((value) => {
                console.log(value)
            });

    }

    loadData() {

    }

    ngOnChanges(changes: SimpleChange): void {
        console.log(changes);
    }


}

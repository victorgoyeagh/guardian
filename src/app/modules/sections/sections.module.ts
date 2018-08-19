import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionsService } from './services/sections.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    RouterModule,
    CommonModule,
    HttpModule
  ],
  providers: [
    SectionsService  
  ],
  exports: [
    SectionsComponent
  ],
  declarations: [
      SectionsComponent
    ]
})
export class SectionsModule { }

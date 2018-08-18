import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionsService } from './services/sections.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SectionsService  
  ],
  declarations: [SectionsComponent]
})
export class SectionsModule { }

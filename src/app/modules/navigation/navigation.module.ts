import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SectionsModule } from '../sections/sections.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule,
    SectionsModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    SectionsModule,
    NavigationComponent
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule { }

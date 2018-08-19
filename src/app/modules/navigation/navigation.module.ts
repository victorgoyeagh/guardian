import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    NavigationComponent
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule { }

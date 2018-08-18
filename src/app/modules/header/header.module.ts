import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavigationModule } from '../navigation/navigation.module';


@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }

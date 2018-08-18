import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePageComponent } from './../views/home/home.component';
import { PageNotFoundPageComponent } from '../views/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundPageComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,
    {
        useHash: true
    }
);
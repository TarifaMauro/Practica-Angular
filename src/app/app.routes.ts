import { Routes } from '@angular/router';

import { HomeComponent } from './components/layout/home/home.component';
import { Punto1Component } from './components/public/punto1/punto1.component';
import { Punto2Component } from './components/public/punto2/punto2.component';
import { Punto3Component } from './components/public/punto3/punto3.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "punto1", component: Punto1Component },
    { path: "punto2", component: Punto2Component },
    { path: "punto3", component: Punto3Component },
    { path: "**", redirectTo: "" } 
];

import { Routes } from '@angular/router';

import { Punto1Component } from './components/public/punto1/punto1.component';
import { HomeComponent } from './components/layout/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "punto1", component: Punto1Component }
];

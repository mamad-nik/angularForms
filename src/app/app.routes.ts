import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TheformComponent } from './theform/theform.component';

export const routes: Routes = [
    {
        path: 'signup',
        title: 'signup',
        component: TheformComponent
    },
    {
        path: 'profile',
        title: 'profile',
        
    }
];

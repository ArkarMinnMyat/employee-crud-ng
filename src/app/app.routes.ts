import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

export const routes: Routes = [
    {
        path:'employee-form',
        component:EmployeeFormComponent
    },
    {
        path:'home',
        component:EmployeeListComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];

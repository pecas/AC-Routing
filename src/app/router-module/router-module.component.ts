import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importacion de componentes de la aplicacion
import { DepartmentListComponent } from '../department-list/department-list.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { DetailDepartmentComponent } from '../detail-department/detail-department.component';

const routes: Routes = [
      {path: 'departments', component: DepartmentListComponent},
      { path: 'employees', component: EmployeeListComponent},
      { path: 'departments/:id', component: DetailDepartmentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ DepartmentListComponent,
                                   EmployeeListComponent,
                                   DetailDepartmentComponent ]



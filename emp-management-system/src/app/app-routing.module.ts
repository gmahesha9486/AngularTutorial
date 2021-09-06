import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard} from './auth-guard.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees', component:EmployeeListComponent, canActivate : [AuthGuard]},
  {path: 'create-employee', component:CreateEmployeeComponent, canActivate : [AuthGuard]},
  {path: 'update-employee/:id', component:UpdateEmployeeComponent, canActivate : [AuthGuard]},
  {path: 'employee-details/:id', component:EmployeeDetailsComponent, canActivate : [AuthGuard]},
  {path: 'login', component : LoginComponent},
  {path: 'registration', component : RegistrationComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

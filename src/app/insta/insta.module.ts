import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from "./auth/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoadingSpinnerComponent } from "./shared/loading.spinner.component";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  }
];



 @NgModule({
   declarations: [LoginComponent, SignupComponent, LoadingSpinnerComponent],
   imports: [RouterModule.forChild(routes),
    FormsModule,
    CommonModule],
 })
 export class InstaModule {}

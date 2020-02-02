import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInModule } from './sign-in/sign-in.module';
import { RegisterModule } from './register/register.module';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentication',
      status: false
    },
    children: [
      {
        path: 'login',
        loadChildren: () => SignInModule
      },
      {
        path: 'registration',
        loadChildren: () => RegisterModule
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AuthModule { }

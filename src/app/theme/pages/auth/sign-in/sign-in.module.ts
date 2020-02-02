import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from '@angular/router';

export const routes = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }


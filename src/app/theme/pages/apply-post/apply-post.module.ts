import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplyPostComponent } from './apply-post.component';

export const routes = [
  {
    path: ':post',
    component: ApplyPostComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApplyPostComponent]
})
export class ApplyPostModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FacetedSearchModule } from '../partials/faceted-search/faceted-search.module';
import { JobCardModule } from '../partials/job-card/job-card.module';

export const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: JobsComponent
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    JobCardModule,
    FacetedSearchModule
  ],
  declarations: [JobsComponent]
})
export class JobsModule { }

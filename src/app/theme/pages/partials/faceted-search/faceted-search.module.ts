import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacetedSearchComponent } from './faceted-search.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    FormsModule
  ],
  declarations: [FacetedSearchComponent],
  exports:[FacetedSearchComponent]
})
export class FacetedSearchModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SearchComponent, FilterFormComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SearchModule {}

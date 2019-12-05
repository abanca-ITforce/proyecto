import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  @Input() incomeLevels: any[] = [
    { id: 'HIC', iso2code: 'XD', value: 'High income' },
    { id: 'INX', iso2code: 'XY', value: 'Not classified' },
    { id: 'LIC', iso2code: 'XM', value: 'Low income' },
    { id: 'LMC', iso2code: 'XN', value: 'Lower middle income' },
    { id: 'LMY', iso2code: 'XO', value: 'Low & middle income' },
    { id: 'MIC', iso2code: 'XP', value: 'Middle income' },
    { id: 'UMC', iso2code: 'XT', value: 'Upper middle income' }
  ];
  // https://api.worldbank.org/v2/incomeLevel/?format=json

  @Output() filter = new EventEmitter<any>();

  filterForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      incomeLevel: ''
    });
  }

  onSubmit() {
    const filter = this.filterForm.value;
    this.filter.emit(filter);
  }
}

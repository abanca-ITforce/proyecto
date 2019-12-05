import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  @Input() incomeLevels: any[];

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

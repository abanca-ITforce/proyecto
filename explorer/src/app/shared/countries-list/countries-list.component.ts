import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  @Input() countries: any[];
  @Input() isAbsolute = true;
  constructor() {}

  ngOnInit() {}
}

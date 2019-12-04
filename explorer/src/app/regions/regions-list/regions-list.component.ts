import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-regions-list",
  templateUrl: "./regions-list.component.html",
  styleUrls: ["./regions-list.component.css"]
})
export class RegionsListComponent implements OnInit {
  @Input() regions: any[];
  constructor() {}

  ngOnInit() {}
}

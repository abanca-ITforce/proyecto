import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-region-card",
  templateUrl: "./region-card.component.html",
  styleUrls: ["./region-card.component.css"]
})
export class RegionCardComponent implements OnInit {
  @Input() region: any;
  constructor() {}

  ngOnInit() {}
}

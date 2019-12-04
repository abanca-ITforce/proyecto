import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../../api.service";

@Component({
  selector: "app-region",
  templateUrl: "./region.component.html",
  styleUrls: ["./region.component.css"]
})
export class RegionComponent implements OnInit {
  region$: Observable<any>;
  countries$: Observable<any[]>;
  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const regionCode = this.activatedRoute.snapshot.params.regionCode;
    this.region$ = this.api.getRegionByCode(regionCode);
    this.countries$ = this.api.getCountriesByRegionCode(regionCode);
  }
}

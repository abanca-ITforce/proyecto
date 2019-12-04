import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";

@Component({
  selector: "app-regions",
  templateUrl: "./regions.component.html",
  styleUrls: ["./regions.component.css"]
})
export class RegionsComponent implements OnInit {
  regions$: Observable<any[]>;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.regions$ = this.api.getAllRegions$();
  }
}

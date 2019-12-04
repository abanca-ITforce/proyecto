import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "../../shared/shared.module";
import { RegionCardComponent } from "./region-card/region-card.component";
import { RegionRoutingModule } from "./region-routing.module";
import { RegionComponent } from "./region.component";

@NgModule({
  declarations: [RegionComponent, RegionCardComponent],
  imports: [CommonModule, RegionRoutingModule, SharedModule, MatCardModule]
})
export class RegionModule {}

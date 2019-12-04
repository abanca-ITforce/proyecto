import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RegionsListComponent } from "./regions-list/regions-list.component";
import { RegionsRoutingModule } from "./regions-routing.module";
import { RegionsComponent } from "./regions.component";

@NgModule({
  declarations: [RegionsComponent, RegionsListComponent],
  imports: [CommonModule, RegionsRoutingModule, MatListModule]
})
export class RegionsModule {}

ng new explorer
ng g m layout
ng g m shared
ng g m home --route=mierda --module=app-routing.module.ts
ng g m country --route=countries --module=app-routing.module.ts
ng g m search --route=search --module=app-routing.module.ts
ng g m regions --route=regions --module=app-routing.module.ts
ng g m regions/region --route=:regionId --module=regions/regions-routing.module.ts
ng add @angular/material
ng g @angular/material:nav layout/nav-shell --export
ng g c shared/countriesList --export
ng g s api
ng g c country/country-card
ng g c regions/regionsList
ng g c regions/region/region-card
ng g c search/filter-form
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { SingleCountryComponent } from './pages/single-country/single-country.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    SingleCountryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    SingleCountryComponent
  ]
})
export class CountryModule { }

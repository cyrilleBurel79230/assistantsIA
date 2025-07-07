import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaveavinRoutingModule } from './caveavin-routing.module';
import { CaveavinComponent } from './caveavin.component';


@NgModule({
  declarations: [
    CaveavinComponent
  ],
  imports: [
    CommonModule,
    CaveavinRoutingModule
  ]
})
export class CaveavinModule { }

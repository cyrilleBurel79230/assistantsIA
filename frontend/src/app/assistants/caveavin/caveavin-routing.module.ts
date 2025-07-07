import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaveavinComponent } from './caveavin.component';

const routes: Routes = [{ path: '', component: CaveavinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaveavinRoutingModule { }

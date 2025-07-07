import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'caveavin', loadChildren: () => import('../assistants/caveavin/caveavin.module').then(m => m.CaveavinModule) }, { path: 'caveavin', loadChildren: () => import('./assistants/caveavin/caveavin.module').then(m => m.CaveavinModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';

import { CaveavinComponent } from './assistants/caveavin/caveavin.component';
// importe ici tes autres composants standalone
// import { BourseComponent } from './assistants/bourse/bourse.component';
// import { JardinComponent } from './assistants/jardin/jardin.component';

export const appRoutes: Routes = [
  { path: 'caveavin', component: CaveavinComponent },
  // { path: 'bourse',   component: BourseComponent },
  // { path: 'jardin',   component: JardinComponent },
  { path: '', redirectTo: 'caveavin', pathMatch: 'full' },
  { path: '**', redirectTo: 'caveavin' }
   
  
];

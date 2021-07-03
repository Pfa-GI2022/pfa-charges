import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SousModFilComponent } from './sous-mod-fil.component';
import { TdComponent } from './td/td.component';
import { TpComponent } from './tp/tp.component';
import { CoursComponent } from './cours/cours.component';

const routes: Routes = [
  {
    path: '',
    component: SousModFilComponent,
    children: [
      {
        path: '',
        component: CoursComponent,
      },
      {
        path: 'tp',
        component: TpComponent,
      },
      {
        path: 'td',
        component: TdComponent,
      },
      {
        path: 'cours',
        component: CoursComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SousModFilRoutingModule {}

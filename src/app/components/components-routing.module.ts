import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitConvComponent } from './unit-conv/unit-conv.component';


const routes: Routes = [
  {
    // path: '',
    // component: AgentComponent,
    // data: {
    //   title: 'Dashboard'
    // }

    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'unit-convo',
        component: UnitConvComponent,
        data: {
          title: 'Unit Converter'
        }
      }
      
    ]
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}

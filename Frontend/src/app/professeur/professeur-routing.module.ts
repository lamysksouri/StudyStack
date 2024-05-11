import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MeetComponent } from './meet/meet.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  {path:"",component:DashbordComponent,
  children: [
    {
      path: 'document', component: DocumentComponent
    },
    {
      path: 'meet', component:MeetComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }

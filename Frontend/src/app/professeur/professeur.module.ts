import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseurRoutingModule } from './professeur-routing.module';

import { SharedModule } from './shared/shared.module';
import { HeaderProfComponent } from './header-prof/header-prof.component';
import { MenuComponent } from './menu/menu.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeetComponent } from './meet/meet.component';
import { DocumentComponent } from './document/document.component';


@NgModule({
  declarations: [HeaderProfComponent,MenuComponent,DashbordComponent,MeetComponent,DocumentComponent],
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class ProfesseurModule { }

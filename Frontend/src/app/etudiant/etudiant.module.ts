import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { SharedModule } from './shared/shared.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderEtudiantComponent } from './header-etudiant/header-etudiant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentComponent } from './document/document.component';
import { MeetComponent } from './meet/meet.component';
import { MatiereService } from './menu/service/matiere.service';



@NgModule({
  declarations: [DashbordComponent, MenuComponent, HeaderEtudiantComponent, DocumentComponent, MeetComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    SharedModule,
    NgbModule
    
  ],
  providers: [MatiereService],
})
export class EtudiantModule { }


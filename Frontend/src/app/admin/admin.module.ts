import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { GestFormateurComponent } from './gest-formateur/gest-formateur.component';


@NgModule({
  declarations: [GestFormateurComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }

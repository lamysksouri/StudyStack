import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MychartComponent } from './mychart/mychart.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: 'professeur',
    loadChildren: () => import('./professeur/professeur.module')
      .then(m => m.ProfesseurModule), 
  },
  {
    path: 'etudiant',
    loadChildren: () => import('./etudiant/etudiant.module')
      .then(m => m.EtudiantModule), 
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule)
  },
  {
    path: "mychart",component:MychartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

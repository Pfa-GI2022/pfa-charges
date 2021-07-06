import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModulesComponent } from './components/create-modules/create-modules.component';
import { CreateProfComponent } from './components/create-prof/create-prof.component';
import { DepartementComponent } from './components/departement/departement.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { ListeProfesseursComponent } from './components/liste-professeurs/liste-professeurs.component';
import { ProfDetailsComponent } from './components/prof-details/prof-details.component';
import { SousModulesComponent } from './components/sous-modules/sous-modules.component';
import { TpComponent } from './components/sous-modules/tp/tp.component';
import { TdComponent } from './components/sous-modules/td/td.component';
import { CoursComponent } from './components/sous-modules/cours/cours.component';
import { LoginComponent } from './components/login/login.component';
import { ListeUsersComponent } from './components/liste-users/liste-users.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListeSousModulesComponent } from './components/liste-sous-modules/liste-sous-modules.component';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';

import { CreateMatiereComponent } from './components/create-matiere/create-matiere.component';
import { role } from './models/role.model';
import { CreateFiliereComponent } from './components/create-filiere/create-filiere.component';
import { CreateDepartementComponent } from './components/create-departement/create-departement.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminDepComponent } from './components/admin-dep/admin-dep.component';
import { AdminFilComponent } from './components/admin-fil/admin-fil.component';
import { Departement } from './models/departement.model';
import { DepartementResolverService } from './services/departement-resolver.service';
import { FiliereComponent } from './components/filiere/filiere.component';
import { ListeModFilComponent } from './components/liste-mod-fil/liste-mod-fil.component';
import { ListeSousModFilComponent } from './components/liste-sous-mod-fil/liste-sous-mod-fil.component';

import { AffectationComponent } from './components/affectation/affectation.component';
import { ImportComponent } from './components/import/import.component';
import { ImportDepartementComponent } from './components/import-departement/import-departement.component';

/*la bonne pratique pour routing !!*/

const routes: Routes = [
  //home
  // { path: '', component: ProfDetailsComponent },
  { path: 'login', component: LoginComponent },

  //departement
  {
    path: 'departement',
    component: DepartementComponent,
     canActivate: [RolesGuard],
      resolve : {
        Departement : DepartementResolverService
      },
     data: {
       expectedRole: role.chefDeDepartement
     },
    children: [
      { path: '', component: ListeProfesseursComponent },
      { path: 'newModule', component: CreateModulesComponent },
      { path: 'newProf', component: CreateProfComponent },
      { path: 'newDepartement', component: CreateDepartementComponent },
      { path: 'newModule', component: CreateModulesComponent },
      { path: 'newFiliere', component: CreateFiliereComponent },
      {
        path: 'modules/:id/sousModules/:id2/td/:id3',
        component: AffectationComponent,
      },
      {
        path: 'modules/:id/sousModules/:id2/tp/:id3',
        component: AffectationComponent,
      },
      {
        path: 'modules/:id/sousModules/:id2/cours/:id3',
        component: AffectationComponent,
      },
      { path: 'modules', component: ListeModulesComponent },
      {
        path: 'modules/:id',
        component: ListeSousModulesComponent,
        children: [
          {
            path: 'sousModules/:id2',
            loadChildren: () =>
              import('./components/sous-modules/sous-modules.module').then(
                (m) => m.SousModuleModule
              ),
          },
          { path: 'newSousModule', component: CreateMatiereComponent },
        ],
      },
      { path: 'profs', component: ListeProfesseursComponent },
      { path: 'profs/:id', component: ProfDetailsComponent },
      { path: '**', component: ListeModulesComponent },
    ],
  },
  //admin
  {
    path: 'admin',
    canActivate: [RolesGuard],
    data: {
      expectedRole: role.admin,
    },
    component: AdminComponent,
    children: [
      { path: '', component: ListeUsersComponent },
      { path: 'users', component: ListeUsersComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'departement', component: AdminDepComponent },
      { path: 'filiere', component: AdminFilComponent },
      { path: 'adddepartement', component: CreateDepartementComponent },
      { path: 'addfiliere', component: CreateFiliereComponent },
    ],
  },
  {
    path: 'filiere',
    canActivate: [RolesGuard],
    data: {
      expectedRole: role.chefDeFiliere,
    },
    component: FiliereComponent,
    children: [
      { path: 'modules', component: ListeModFilComponent },
      {
        path: 'modules/:id',
        component: ListeSousModFilComponent,
        children: [
          {
            path: 'sousModules/:id2',
            loadChildren: () =>
              import('./components/sous-mod-fil/sous-mod-fil.module').then(
                (m) => m.SousModFilModule
              ),
          },
        ],
      },
    ],
  },
  {path : 'import',component : ImportComponent},
  {path : 'importdepartement',component : ImportDepartementComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

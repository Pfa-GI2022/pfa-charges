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

import { role } from './models/role.model';
import { CreateFiliereComponent } from './components/create-filiere/create-filiere.component';
import { CreateDepartementComponent } from './components/create-departement/create-departement.component';
import { AddUserComponent } from './components/add-user/add-user.component';
/*la bonne pratique pour routing !!*/

const routes: Routes = [

  //home
 //{path : '', component: ProfDetailsComponent},
 //{ path: 'login', component: LoginComponent },

  //departement
  {
    path: 'departement',component: DepartementComponent,
    //canActivate: [RolesGuard], 
   // data: { 
    //  expectedRole: role.chefDeDepartement
  //  },
  // canActivate: [RolesGuard], 
  // data: { 
    // expectedRole: role.chefDeDepartement
  // },
    children: [
      { path: '', component: ListeProfesseursComponent },
      { path: 'newModule', component: CreateModulesComponent },
      { path: 'newProf', component: CreateProfComponent },
      { path: 'newDepartement', component: CreateDepartementComponent },
      { path: 'newModule', component: CreateModulesComponent },
      { path: 'newFiliere', component: CreateFiliereComponent },
      { path: 'modules', component: ListeModulesComponent, },
      {
        path: 'modules/:id', component: ListeSousModulesComponent,
        children: [
          { path: 'sousModules/:id2', loadChildren: () => import('./components/sous-modules/sous-modules.module').then(m => m.SousModuleModule) },
        ]
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
      expectedRole: role.admin
    },
    component: AdminComponent,
    children: [
      { path: 'users', component: ListeUsersComponent },
      { path: 'add', component: AddUserComponent },
    ],
  },


  //login


  { path: '**', redirectTo : ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

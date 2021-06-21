import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModulesComponent } from './components/create-modules/create-modules.component';
import { CreateProfComponent } from './components/create-prof/create-prof.component';
import { DepartementComponent } from './components/departement/departement.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { ListeProfesseursComponent } from './components/liste-professeurs/liste-professeurs.component';
import { ProfDetailsComponent } from './components/prof-details/prof-details.component';
import { SousModulesComponent } from './components/sous-modules/sous-modules.component';

/*la bonne pratique pour routing !!*/


const routes: Routes = [
  { path : '' , component : ListeProfesseursComponent},
  //departement
  {path : 'departement', component : DepartementComponent,
    children : [
      {path : '' , component: ListeProfesseursComponent},
      { path : 'newProf', component : CreateProfComponent},
      { path : 'sousModule' , component : SousModulesComponent},
      {path : 'profs' , component: ListeProfesseursComponent},
      {path : 'modules' , component : ListeModulesComponent},
      {path : 'profDetails' , component : ProfDetailsComponent},
      {path : '**' , component : ListeModulesComponent}
    ]
  },
  //filiere /filiere ///


  //admin   /admin/....
  { path : 'newProf', component : CreateProfComponent},
  { path : 'newModule', component :  CreateModulesComponent},
  { path : 'profDetails', component : ProfDetailsComponent},
  { path : 'liste' , component : ListeProfesseursComponent},
  { path : 'sousModule' , component : SousModulesComponent},
  { path : 'module', component : ListeModulesComponent}
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

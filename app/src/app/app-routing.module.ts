import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModulesComponent } from './components/create-modules/create-modules.component';
import { CreateProfComponent } from './components/create-prof/create-prof.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { ListeProfesseursComponent } from './components/liste-professeurs/liste-professeurs.component';
import { ProfDetailsComponent } from './components/prof-details/prof-details.component';

/*la bonne pratique pour routing !!*/


const routes: Routes = [
  
  { path : '' , component : ListeProfesseursComponent},
  { path : 'newProf', component : CreateProfComponent},
  { path : 'newModule', component :  CreateModulesComponent},
  { path : 'profDetails', component : ProfDetailsComponent},
  { path : 'liste' , component : ListeProfesseursComponent},
  { path : 'module', component : ListeModulesComponent}
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ListeProfesseursComponent } from './components/liste-professeurs/liste-professeurs.component';
import { FiliereService } from './services/filiere.service';
import { CarteProfesseurComponent } from './components/carte-professeur/carte-professeur.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CreateProfComponent } from './components/create-prof/create-prof.component';
import { ProfDetailsComponent } from './components/prof-details/prof-details.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { CreateModulesComponent } from './components/create-modules/create-modules.component';
import { SousModulesComponent } from './components/sous-modules/sous-modules.component';
import { ActiviteComponent } from './components/activite/activite.component';
import { CarteModuleComponent } from './components/carte-module/carte-module.component';
import { AppRoutingModule } from './app-routing.module';

//just for test
const routes: Routes = [
  { path: 'newProf', component: CreateProfComponent },
  { path: 'profDetails', component: ProfDetailsComponent },
  { path: 'liste', component: ListeProfesseursComponent },
  { path: 'home', component: NavComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: ListeProfesseursComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListeProfesseursComponent,
    CarteProfesseurComponent,
    SearchFilterPipe,
    CreateProfComponent,
    ProfDetailsComponent,
    NavComponent,
    ListeModulesComponent,
    CreateModulesComponent,
    SousModulesComponent,
    ActiviteComponent,
    CarteModuleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [FiliereService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
import { SidenavComponent } from './components/sidenav/sidenav.component';

 
//just for test
const routes: Routes = [
  { path : 'newProf', component : CreateProfComponent},
  { path : 'profDetails', component : ProfDetailsComponent},
  { path : 'liste' , component : ListeProfesseursComponent},
  { path : '' , component : ListeProfesseursComponent},
  { path : '**' , component : ListeProfesseursComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListeProfesseursComponent,
    CarteProfesseurComponent,
    SearchFilterPipe,
    CreateProfComponent,
    ProfDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    FiliereService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

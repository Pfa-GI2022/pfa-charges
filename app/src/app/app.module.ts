import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ListeProfesseursComponent } from './components/liste-professeurs/liste-professeurs.component';
import { FiliereService } from './services/filiere.service';
import { CarteProfesseurComponent } from './components/carte-professeur/carte-professeur.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ChargeFilterPipe } from './pipes/charge-filter.pipe';
import { CreateProfComponent } from './components/create-prof/create-prof.component';
import { ProfDetailsComponent } from './components/prof-details/prof-details.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { CreateModulesComponent } from './components/create-modules/create-modules.component';
import { ActiviteComponent } from './components/activite/activite.component';
import { CarteModuleComponent } from './components/carte-module/carte-module.component';
import { AppRoutingModule } from './app-routing.module';
import { DepartementComponent } from './components/departement/departement.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SearchFilterModulesPipe } from './pipes/search-filter-modules.pipe';
import { ListeUsersComponent } from './components/liste-users/liste-users.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListeSousModulesComponent } from './components/liste-sous-modules/liste-sous-modules.component';
import { CarteMatiereComponent } from './components/carte-matiere/carte-matiere.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserSearchPipe } from './pipes/user-search.pipe';

import { SousModuleModule } from './components/sous-modules/sous-modules.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { RoleFilterPipe } from './pipes/role-filter.pipe';
import { CreateDepartementComponent } from './components/create-departement/create-departement.component';
import { CreateFiliereComponent } from './components/create-filiere/create-filiere.component';
import { FiliereFilterModulesPipe } from './pipes/filiere-filter-modules.pipe';
import { CreateMatiereComponent } from './components/create-matiere/create-matiere.component';
import { AdminDepComponent } from './components/admin-dep/admin-dep.component';
import { AdminFilComponent } from './components/admin-fil/admin-fil.component';
import { DepCardComponent } from './components/dep-card/dep-card.component';
import { FilCardComponent } from './components/fil-card/fil-card.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { AffectationCarteComponent } from './components/affectation-carte/affectation-carte.component';
//just for test

@NgModule({
  declarations: [
    AppComponent,
    ListeProfesseursComponent,
    CarteProfesseurComponent,
    SearchFilterPipe,
    CreateProfComponent,
    ProfDetailsComponent,
    NavComponent,
    LoginComponent,
    ListeModulesComponent,
    CreateModulesComponent,
    ActiviteComponent,
    CarteModuleComponent,
    ChargeFilterPipe,
    DepartementComponent,
    DoughnutChartComponent,
    ProfileCardComponent,
    SearchFilterModulesPipe,
    ListeUsersComponent,
    AdminComponent,
    ListeSousModulesComponent,
    CarteMatiereComponent,
    LogoutComponent,
    CreateDepartementComponent,
    CreateFiliereComponent,
    FiliereFilterModulesPipe,
    AddUserComponent,
    UserSearchPipe,
    CreateMatiereComponent,
    UserCardComponent,
    UserFilterPipe,
    RoleFilterPipe,
    AdminDepComponent,
    AdminFilComponent,
    DepCardComponent,
    FilCardComponent,
    AffectationComponent,
    AffectationCarteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HighchartsChartModule,
    SousModuleModule,
    CommonModule,
  ],
  providers: [FiliereService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

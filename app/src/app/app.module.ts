import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListeProfesseursComponent } from './components/liste-professeurs/liste-professeurs.component';
import { FiliereService } from './services/filiere.service';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    ListeProfesseursComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    FiliereService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

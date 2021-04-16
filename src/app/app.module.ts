import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/Router';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'
import { NavigationComponent } from './components/navigation/navigation.component';
import { FotoFormComponent } from './components/foto-form/foto-form.component';
import { FotoPrewComponent } from './components/foto-prew/foto-prew.component';
import { FotoListComponent } from './components/foto-list/foto-list.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { QSomosComponent } from './components/qsomos/qsomos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FotoFormComponent,
    FotoPrewComponent,
    FotoListComponent,
    PrincipalComponent,
    QSomosComponent,
    ContactoComponent,
    RegistroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

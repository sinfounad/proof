import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    
    
    {
        path:'lista',
        component: FotoListComponent


    },
    
    {
        path:'fotos/nuevo',
        component: FotoFormComponent


    },
    {
        path:'ced/:id',
        component: FotoPrewComponent 


    },

    {
        path:'principal',
        component: PrincipalComponent,


    },
    
    {
        path:'quienes',
        component: QSomosComponent,


    },

    {
        path:'registro',
        component: RegistroComponent,


    },

    {
        path:'contacto',
        component: ContactoComponent,


    },
    {
        path:'menu',
        component: MenuComponent,


    },



    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

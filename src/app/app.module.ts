import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import{BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


import { AppRoutingModule } from './app-routing.module';
import { ProjectosComponent } from './projectos/projectos.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { CardProjectosComponent } from './card-projectos/card-projectos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilBlackComponent } from './perfil-black/perfil-black.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProjectosComponent,
    CompetenciasComponent,
    CardProjectosComponent,
    PerfilComponent,
    PerfilBlackComponent,
    ExperienciaComponent,
    ContactoComponent,

  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

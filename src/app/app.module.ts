import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { EtudiantComponent } from './component/etudiant/etudiant.component';
import { ProfesseurComponent } from './component/professeur/professeur.component';
import { SoutenantComponent } from './component/soutenant/soutenant.component';
import { GerantPfeComponent } from './component/gerant-pfe/gerant-pfe.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CreationprojetComponent } from './component/formulaire/creationprojet/creationprojet.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { EnvoyermessageComponent } from './component/formulaire/envoyermessage/envoyermessage.component';
import { PubliercommentaireComponent } from './component/formulaire/publiercommentaire/publiercommentaire.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ConnexionComponent,
    EtudiantComponent,
    ProfesseurComponent,
    SoutenantComponent,
    GerantPfeComponent,
    CreationprojetComponent,
    EnvoyermessageComponent,
    PubliercommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

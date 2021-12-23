import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenueComponent } from './component/bienvenue/bienvenue.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { ProjetComponent } from './component/projet/projet.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SoutenantComponent } from './component/soutenant/soutenant.component';

const routes: Routes = [
  { path: 'bien', component: BienvenueComponent },
  { path: 'login', component: ConnexionComponent },
  {path: 'home',component :SidebarComponent},
  {path: 'etudiant',component :SoutenantComponent},
  {path: 'projet',component :ProjetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

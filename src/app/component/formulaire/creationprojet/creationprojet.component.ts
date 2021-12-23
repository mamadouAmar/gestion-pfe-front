import { Competence } from 'src/app/models/competence';
import { Component, OnInit } from '@angular/core';
import { Encadreur } from 'src/app/models/encadreur';
import { Departement } from 'src/app/models/departement';
import { ProjetFinDetude } from 'src/app/models/projet-fin-detude';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creationprojet',
  templateUrl: './creationprojet.component.html',
  styleUrls: ['./creationprojet.component.scss']
})
export class CreationprojetComponent implements OnInit {

  sujet = ["Gestion des PFE","Gestion des alumni","Recherche de stage","Gestion des immersions"]

  enc1 = new Encadreur(1,"Modou","Ndiaye","nmodou@ept.sn","azert","a1a1a1");
  enc2 = new Encadreur(1,"Modou","Diop","dmodou@ept.sn","azert","a2a2a2");
  enc3 = new Encadreur(1,"Modou","Fall","fmodou@ept.sn","azert","a3a3a3");
  enc4 = new Encadreur(1,"Modou","Kane","kmodou@ept.sn","azert","a4a4a4");

  dep1 = new Departement(1,"Génie informatique et Télécoms","GIT");
  dep2 = new Departement(1,"Génie Electromécanique","GEM");
  dep3 = new Departement(1,"Génie Civil","GC");
  dep4 = new Departement(1,"Filière aéronautique","Aero");

  comp1 = new Competence("Java","développement","Hors pair");
  comp2 = new Competence("python","IA","Hors pair");
  comp3 = new Competence("back end","développement","Hors pair");
  comp4 = new Competence("Deep learning","IA","Hors pair");
  comp5 = new Competence("front end","développement","Hors pair");
  comp6 = new Competence("machine learning","IA","Hors pair");

  competences = [this.comp1, this.comp2, this.comp3, this.comp4, this.comp5, this.comp6]
  departements = [this.dep1, this.dep2, this.dep3, this.dep4]
  encadreurs = [this.enc1, this.enc2, this.enc3, this.enc4]
  projetForm!: FormGroup;

  constructor() { }

  // projet: ProjetFinDetude[];

 

  ngOnInit() {
    
  }

  onSubmitForm() {
    const formValue = this.projetForm.value;
    const projet = new ProjetFinDetude(
      1,
      formValue['sujet'],
      formValue['annee'],
      formValue['encadreur'],
      formValue['competence'],
      formValue['departement']
    );
    
  }



  
}

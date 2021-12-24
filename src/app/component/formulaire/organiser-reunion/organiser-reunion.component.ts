import { Component, OnInit } from '@angular/core';
import { Encadreur } from 'src/app/models/encadreur';
import { ProjetFinDetude } from 'src/app/models/projet-fin-detude';
import { Reunion} from 'src/app/models/reunion';
import { FormGroup } from '@angular/forms';
import { Soutenant } from 'src/app/models/soutenant';
import { Departement } from 'src/app/models/departement';
import { Competence } from 'src/app/models/competence';




@Component({
  selector: 'app-organiser-reunion',
  templateUrl: './organiser-reunion.component.html',
  styleUrls: ['./organiser-reunion.component.scss']
})
export class OrganiserReunionComponent implements OnInit {
  sujet = ["Gestion des PFE","Gestion des alumni","Recherche de stage","Gestion des immersions"]
  ladate = new Date;


  enc1 = new Encadreur(1,"Modou","Ndiaye","nmodou@ept.sn","azert","a1a1a1");
  enc2 = new Encadreur(2,"Modou","Diop","dmodou@ept.sn","azert","a2a2a2");
  enc3 = new Encadreur(3,"Modou","Fall","fmodou@ept.sn","azert","a3a3a3");
  enc4 = new Encadreur(4,"Modou","Kane","kmodou@ept.sn","azert","a4a4a4");

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

projet1 = new ProjetFinDetude(1,"Gestion des PFE",2021, this.dep1,[this.enc1, this.enc3],[this.comp1,this.comp2,this.comp4])

  sout1 = new Soutenant(1,"789546231",this.ladate,this.dep1,[this.comp1,this.comp2,this.comp4],this.projet1);
  sout2 = new Soutenant(2,"789546231",this.ladate,this.dep1,[this.comp1,this.comp2,this.comp4],this.projet1);
  sout3 = new Soutenant(3,"789546231",this.ladate,this.dep1,[this.comp1,this.comp2,this.comp4],this.projet1);
  sout4 = new Soutenant(4,"789546231",this.ladate,this.dep1,[this.comp1,this.comp2,this.comp4],this.projet1);
  
  
  competences = [this.comp1, this.comp2, this.comp3, this.comp4, this.comp5, this.comp6]
  departements = [this.dep1, this.dep2, this.dep3, this.dep4]

  encadreurs = [this.enc1, this.enc2, this.enc3, this.enc4];
  reunionForm!: FormGroup;



  constructor() { }

  ngOnInit(): void {
  }


  onSubmitForm() {
    const formValue = this.reunionForm.value;
    const projet = new Reunion(
      formValue['sujet'],
      formValue['date'],
      formValue['lieu'],
      formValue['projet'],
      formValue['participant']
    );
    
}
}
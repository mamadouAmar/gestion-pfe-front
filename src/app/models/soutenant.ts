import { Competence } from "./competence";
import { Departement } from "./departement";
import { Etudiant } from "./etudiant";
import { ProjetFinDetude } from "./projet-fin-detude";

export class Soutenant extends Etudiant{
    constructor(
        protected id : Number,
        protected numero_etudiant : String,
        protected annee_d_entree : Date,
        protected departement : Departement,
        protected competences : Competence[],
        protected projet : ProjetFinDetude
    )
    {
        super(id, numero_etudiant, 
            annee_d_entree, departement,
            competences);
    }
}

import { Competence } from "./competence";
import { Departement } from "./departement";
import { Etudiant } from "./etudiant";
import { ProjetFinDetude } from "./projet-fin-detude";

export class Soutenant extends Etudiant{
    constructor(
        public id : Number,
        public numero_etudiant : String,
        public annee_d_entree : Date,
        public departement : Departement,
        public competences : Competence[],
        public projet : ProjetFinDetude
    )
    {
        super(id, numero_etudiant, 
            annee_d_entree, departement,
            competences);
    }
}

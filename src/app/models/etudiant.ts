import { Competence } from "./competence";
import { Departement } from "./departement";

export class Etudiant {
    constructor(
        protected id : Number,
        protected numero_etudiant : String,
        protected annee_d_entree : Date,
        protected departement : Departement,
        protected competences : Competence[]
    ){

    }
}

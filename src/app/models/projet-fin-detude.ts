import { Competence } from "./competence";
import { Departement } from "./departement";
import { Encadreur } from "./encadreur";

export class ProjetFinDetude {
    
    constructor(
        private id : Number,
        private sujet : String,
        private annee_academique : Number,
        private departement : Departement,
        private encadreurs : Encadreur[],
        private competences : Competence[]
    )
    {}

}

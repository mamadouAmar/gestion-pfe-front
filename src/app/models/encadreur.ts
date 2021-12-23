import { User } from "./user";

export class Encadreur extends User{
    constructor(
        public id: Number,
        public prenom : String,
        public nom : String,
        public mail : String,
        public password: String,
        public matricule: String
    )
    {
        super(id, prenom, nom, mail, password);
    }
}

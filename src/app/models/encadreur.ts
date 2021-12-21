import { User } from "./user";

export class Encadreur extends User{
    constructor(
        protected id: Number,
        protected prenom : String,
        protected nom : String,
        protected mail : String,
        protected password: String,
        protected matricule: String
    )
    {
        super(id, prenom, nom, mail, password);
    }
}

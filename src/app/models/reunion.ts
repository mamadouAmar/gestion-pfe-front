import { ProjetFinDetude } from "./projet-fin-detude";
import { User } from "./user";

export class Reunion {
    constructor(
        public sujet : String,
        public date : Date,
        public lieu : String,
        public projet : ProjetFinDetude,
        public participants : User[]
    ){

    }
}

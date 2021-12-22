import { ProjetFinDetude } from "./projet-fin-detude";
import { User } from "./user";

export class Reunion {
    constructor(
        private sujet : String,
        private date : Date,
        private lieu : String,
        private projet : ProjetFinDetude,
        private participants : User[]
    ){

    }
}

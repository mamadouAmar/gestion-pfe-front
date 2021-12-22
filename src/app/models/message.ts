import { ProjetFinDetude } from "./projet-fin-detude";
import { User } from "./user";

export class Message {
    constructor(
        private id : Number,
        private objet : String,
        private contenu : String,
        private date : Date,
        private auteur: User,
        private projet : ProjetFinDetude
    ){

    }
}

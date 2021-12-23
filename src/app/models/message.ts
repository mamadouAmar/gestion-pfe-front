import { ProjetFinDetude } from "./projet-fin-detude";
import { User } from "./user";

export class Message {
    constructor(
        public id : Number,
        public objet : String,
        public contenu : String,
        public date : Date,
        public auteur: User,
        public projet : ProjetFinDetude
    ){

    }
}

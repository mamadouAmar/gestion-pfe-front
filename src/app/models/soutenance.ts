import { Jury } from "./jury";
import { ProjetFinDetude } from "./projet-fin-detude";

export class Soutenance {
    constructor(
        private id : Number,
        private projet : ProjetFinDetude,
        private jury : Jury,
        private date : Date,
        private lieu : String,
        private acces : Boolean,
    ){

    }
}

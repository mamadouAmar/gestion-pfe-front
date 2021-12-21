import { Jury } from "./jury";
import { Soutenant } from "./soutenant";

export class Evaluation {
    constructor(
        private id : Number,
        private remarques : String,
        private appreciations : String,
        private note : Number,
        private soutenant : Soutenant,
        private jury : Jury
    ){

    }
}

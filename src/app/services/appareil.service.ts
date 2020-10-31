import { Subject } from 'rxjs';

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
        { id:1, name: "tele", statut: "allumé" },
        { id:2, name: "phone", statut: "allumé" },
        { id:3, name: "frigo", statut: "éteint" }
    ];

    emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
    }

    getAppareilById(id:number){
        const appareil = this.appareils.find(
            (appareilObject)=>{return appareilObject.id === id;}
        );
        return appareil;
    }

    onSwitchOnAll() {
        for (let appareil of this.appareils) {
            appareil.statut = 'allumé';
        }
        this.emitAppareilSubject();
    }

    onSwitchOffAll() {
        for (let appareil of this.appareils) {
            appareil.statut = 'éteint';
        }
        this.emitAppareilSubject();
    }

    onSwitchOnOne(index:number){
        this.appareils[index].statut="allumé";
        this.emitAppareilSubject();
    }

    onSwitchOffOne(index:number){
        this.appareils[index].statut="éteint";
        this.emitAppareilSubject();
    }
}
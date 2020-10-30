import { Subject } from 'rxjs/Subject';

export class AppareilService {

    //attrubit de type subject
    appareilSubject = new Subject<any[]>();

    private appareils = [
        { id: 1, name: "tele", statut: "allumé" },
        { id: 2, name: "phone", statut: "allumé" },
        { id: 3, name: "frigo", statut: "eteint" }
    ];

    //methode
    emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find((appareilObject) => {
            return appareilObject.id === id;
        }
        );
        return appareil;
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.statut = 'allumé';
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.statut = 'eteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].statut = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {
        this.appareils[index].statut = 'eteint';
        this.emitAppareilSubject();
    }

}
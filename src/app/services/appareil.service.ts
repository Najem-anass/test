import { Subject } from 'rxjs';

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
        { id : 1, name: "tele", statut: "éteint" },
        { id : 2, name: "phone", statut: "allumé" },
        { id : 3, name: "frigo", statut: "éteint" }
    ];

    emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
    }

    getAppareilById(id:number){
        const appareil=this.appareils.find(
            (appareilObject)=>{
                return appareilObject.id ===id;
            }
        );
        return appareil;
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.statut='allumé';
            console.log("inside switchOnAll",appareil.statut)
        };
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.statut='éteint';
            console.log("inside switchOffAll",appareil.statut)
        }
        this.emitAppareilSubject();
    }

    onSwitchOnOne(index:number){
        this.appareils[index].statut='allumé';
        this.emitAppareilSubject();
    }

    onSwitchOffOne(index:number){
        this.appareils[index].statut='éteint';
        this.emitAppareilSubject();
    }

    addAppareil(name : string, status: string){
        const appareilObject = {
            id : 0,
            name : "",
            statut : "",
        };
        //l'index du arrays debut de 0 donc l'index du appareils c'est 2 mais il contient 3 elements
        //lenght c'est le nombres des elements dans notre cas c'est 3
        //donc appareils.length-1 = 2 l'index du dernier element
        //appareils[(this.appareils.length-1 )].id+1 incrementation du dernier id element
        appareilObject.id = this.appareils[(this.appareils.length-1 )].id+1;
        appareilObject.name = name;
        appareilObject.statut = status;

        this.appareils.push(appareilObject);

        this.emitAppareilSubject();
    }
}
export class AppareilService {

    appareils = [
        { id : 1, name: "tele", statut: "éteint" },
        { id : 2, name: "phone", statut: "allumé" },
        { id : 3, name: "frigo", statut: "éteint" }
    ];

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
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.statut='éteint';
            console.log("inside switchOffAll",appareil.statut)
        }
    }

    onSwitchOnOne(index:number){
        this.appareils[index].statut='allumé';
    }

    onSwitchOffOne(index:number){
        this.appareils[index].statut='éteint';
    }

}
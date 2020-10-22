export class AppareilService {

    appareils = [
        { id:1, name: "tele", statut: "allumé" },
        { id:2, name: "phone", statut: "allumé" },
        { id:3, name: "frigo", statut: "éteint" }
    ];

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
    }

    onSwitchOffAll() {
        for (let appareil of this.appareils) {
            appareil.statut = 'éteint';
        }
    }

    onSwitchOnOne(index:number){
        this.appareils[index].statut="allumé";
    }

    onSwitchOffOne(index:number){
        this.appareils[index].statut="éteint";
    }
}
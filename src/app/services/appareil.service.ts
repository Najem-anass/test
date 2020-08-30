export class AppareilService {

    appareils = [
        { name: "tele", statut: "allumé" },
        { name: "phone", statut: "allumé" },
        { name: "frigo", statut: "eteint" }
    ];

    switchOnAll() {
        for(let appareil of this.appareils){
            appareil.statut='allumé';
        }
    }

    switchOffAll() {
        for(let appareil of this.appareils){
            appareil.statut='eteint';
        }
    }

}
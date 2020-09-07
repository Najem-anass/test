export class AppareilService {

    appareils = [
        { name: "tele", statut: "éteint" },
        { name: "phone", statut: "allumé" },
        { name: "frigo", statut: "éteint" }
    ];

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

}
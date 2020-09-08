export class AppareilService {

    appareils = [
        { name: "tele", statut: "allumé" },
        { name: "phone", statut: "allumé" },
        { name: "frigo", statut: "éteint" }
    ];

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
}
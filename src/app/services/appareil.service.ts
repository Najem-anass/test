export class AppareilService {

    appareils = [
        { id: 1, name: "tele", statut: "allumé" },
        { id: 2, name: "phone", statut: "allumé" },
        { id: 3, name: "frigo", statut: "eteint" }
    ];

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
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.statut = 'eteint';
        }
    }

    switchOnOne(index: number) {
        this.appareils[index].statut = 'allumé';
    }

    switchOffOne(index: number) {
        this.appareils[index].statut = 'eteint';
    }

}
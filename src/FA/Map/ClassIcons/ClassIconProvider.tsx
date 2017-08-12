const ArcherGold = require('./Archer-Gold.png');

export default class ClassIconProvider {
    static get(className: string, rarity: string) {
        switch (className) {
            case "Archer":
                return ArcherGold;
        }
    }
}
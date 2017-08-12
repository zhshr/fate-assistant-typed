// const ArcherGold = require('./Archer-Gold.png');
// const AssassinGold = require('./Assassin-Gold.png');
// const SaberGold = require('./Saber-Gold.png');
// const AssassinGold = require('./Assassin-Gold.png');
// const AssassinGold = require('./Assassin-Gold.png');
// const AssassinGold = require('./Assassin-Gold.png');
// const AssassinGold = require('./Assassin-Gold.png');
// const AssassinGold = require('./Assassin-Gold.png');
// const AssassinGold = require('./Assassin-Gold.png');

export default class ClassIconProvider {
    static get(className: string, rarity: string) {
        return require("./" + className + "-Gold.png");
    }
}
const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}
function whoIsStronger(hero) {
    const myStrength = 82;
    if (hero.getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
// whoIsStronger(hero.getStrength);
console.log(whoIsStronger(hero)); 
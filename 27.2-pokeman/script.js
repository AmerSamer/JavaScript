function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;

    this.callPokemon = ()=>{
       console.log(`I choose you, ${this.name}`); 
    }
    this.attack = (attackNumber)=>{
        console.log(`${this.name} used ${this.attackList[attackNumber]}`);
    }
}

let Pokemon1 = new Pokemon('rachel', 'female', ['fire', 'water', 'air'])
let Pokemon2 = new Pokemon('monica', 'female', ['fire', 'water', 'air'])
let Pokemon3 = new Pokemon('ross', 'male', ['fire', 'water', 'air'])

Pokemon1.callPokemon()
Pokemon1.attack(0)
console.log('/////////////////////////////');
Pokemon2.callPokemon()
Pokemon2.attack(1)
console.log('/////////////////////////////');
Pokemon3.callPokemon()
Pokemon3.attack(2)
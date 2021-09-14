
const mycountry = {
    country: 'Italy',
    capital: 'Rome',
    language: 'Italian',
    population: 60355302,
    neighbours: ['Austria', 'France', 'Holy See', 'San Marino', 'Slovenia', 'Switzerland'],
    describe: function () {
        msg = this.country + ' Has ' + this.population + ' people, their mother tongue is ' + this.language +
            ', they have ' + this.neighbours.length + ' neighbouring countries and a capital called ' + this.capital;
        return msg;
    },
    checkIsland: function () {
        if(this.neighbours.length != 0){
            isIsland= false;
        }else{
            isIsland= true;
        }
        return isIsland;
    }
}


console.log(mycountry.describe());
console.log(mycountry.checkIsland());
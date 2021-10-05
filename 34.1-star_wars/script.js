async function peoples() {
    let array = []
    for (let i = 1; i <= 10 ; i++) {
        let res = await (await fetch(`https://swapi.dev/api/people/${i}/`)).json()
        let resPlanet = await (await fetch(`https://swapi.dev/api/planets/${i}/`)).json()

        let obj = {
            name: res.name,
            hair: res.hair_color,
            height: res.height,
            planet: {
                name: resPlanet.name,
                population: resPlanet.population,
            }
        }

        array.push(obj)
    }

    console.log(array);

    let table = document.querySelector('#mytable')
    let out = ''
    for(let i = 0 ; i < 11 ; i++){
        out += '<tr>'
        for(let j = 0 ; j < 6 ; j++){
            if(j == 0 && i == 0)
            out += '<th>name</th>'
            if(j == 1 && i == 0)
            out += '<th>hair</th>'
            if(j == 2 && i == 0)
            out += '<th>height</th>'
            if(j == 3 && i == 0)
            out += '<th>planet name</th>'
            if(j == 4 && i == 0)
            out += '<th>planet population</th>'

            if(j == 1 && i != 0)
            out += '<th>' + array[i-1].name + '</th>'
            if(j == 2 && i != 0)
            out += '<th>' + array[i-1].hair + '</th>'
            if(j == 3 && i != 0)
            out += '<th>' + array[i-1].height + '</th>'
            if(j == 4 && i != 0)
            out += '<th>' + array[i-1].planet.name + '</th>'
            if(j == 5 && i != 0)
            out += '<th>' + array[i-1].planet.population + '</th>'
        }
        out += '</tr>'
    }
    table.innerHTML = out
}

peoples()


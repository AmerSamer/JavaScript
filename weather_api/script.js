function weather() {
    let output = ''
    let array = []
    let loc = document.querySelector('.location')
    let search = document.querySelector('.btnSearch')
    let exist = document.querySelector('.exist')
    search.addEventListener('click', main)
    currentLocation()
    
    async function currentLocation() {
        let data1 = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Haifa&appid=51b66d1c18112050011a7e4248fdc8f6`)).json();
        array.push(data1.name)
        // console.log(array);
        let ww = document.querySelector('.current-location')
        function getSunRiseOrSunSet(sunriseOrsunset) {
            let d = sunriseOrsunset * 1000
            const dateObject = new Date(d)
            const humanDateFormat = dateObject.toLocaleString()
            return humanDateFormat
        }
        function Temperature(temp) {
            let num = temp - 273.15
            return num.toFixed(2);
        }
        ww.innerHTML = `City: ${data1.name} <br> description: ${data1.weather[0].description} 
                        <br> Temperature: ${Temperature(data1.main.temp)}°C
                        <br> sunrise: ${getSunRiseOrSunSet(data1.sys.sunrise)} <br> sunset: ${getSunRiseOrSunSet(data1.sys.sunset)} <br>`
    }
    async function main() {
        try {
            let loc1 = loc.value
            let data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc1}&appid=51b66d1c18112050011a7e4248fdc8f6`)).json();

            exist.innerHTML = ''
            if (data.name == null) {
                exist.innerHTML = 'no search'
            }
            else if (!array.includes(data.name)) {

                array.push(data.name)

                console.log(array);

                let w = document.querySelector('.main')
                function getSunRiseOrSunSet(sunriseOrsunset) {
                    let d = sunriseOrsunset * 1000
                    const dateObject = new Date(d)
                    const humanDateFormat = dateObject.toLocaleString()
                    return humanDateFormat
                }
                function Temperature(temp) {
                    let num = temp - 273.15
                    return num.toFixed(2);
                }
                output += `<div>City: ${data.name} <br> description: ${data.weather[0].description} 
                         <br> Temperature: ${Temperature(data.main.temp)}°C
                           <br> sunrise: ${getSunRiseOrSunSet(data.sys.sunrise)} <br> sunset: ${getSunRiseOrSunSet(data.sys.sunset)}  </div>`
                w.innerHTML = output
            } else {
                exist.innerHTML = 'Exist'
                // console.log(array);

            }
        } catch (err) {
            exist.innerHTML = 'no search'
        }
    }
}
weather()

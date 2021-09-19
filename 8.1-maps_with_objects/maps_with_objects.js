const obj = [{
    name: 'Monica'
 },
 {
    name: 'Rachel'
 },
 {
    name: 'Ross'
 }]
 let myMap = new Map()

 // Add new elements to the map
 myMap.set(obj[0], '111111')
 myMap.set(obj[1], '222222')
 myMap.set(obj[2], '333333') 

 for (const element of myMap) {
    console.log(element);
  }
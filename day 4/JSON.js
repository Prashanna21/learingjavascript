//Javascript Object Notation(JSON)

//Most commonly used methods for JSON in javascript

const Nepal = {
    Captial : "Kathmandu",
    Langauge: "Nepali", 
    Currency: "NPR"
}

//JSON.stringify(object) 
// It converts Javascript Object into JSON form

const JSON_Nepal = JSON.stringify(Nepal) 

console.log(Nepal) // { Captial: 'Kathmandu', Langauge: 'Nepali', Currency: 'NPR' } // IN OBJECT FORM
console.log(JSON_Nepal) // {"Captial":"Kathmandu","Langauge":"Nepali","Currency":"NPR"} // IN JSON FORM
console.log(typeof(JSON_Nepal)) // String


//JSON.parse(JSON)
//Converts JSON into Javascript Object Form

const objectNepal = JSON.parse(JSON_Nepal)
console.log(objectNepal) // { Captial: 'Kathmandu', Langauge: 'Nepali', Currency: 'NPR' }
console.log(typeof(objectNepal)) // object
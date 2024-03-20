//TODO/-- 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//TODO/-- "Lahore, Pakistan"

// TODO/--Call your function with at least three city-country pairs, and print the value that’s returned.


//? First step is to , creating a function  that takes names of a city and it's country.
//? second to add return value , with templete littrells .
let cityCounty = (cityname : string , country : string) => {
    return `${cityname} , ${country}.`
}

//? calling functions with at leat three pairs of country and city.

console.log(cityCounty("Tokyo" , "Japan"));
console.log(cityCounty("Istanbol"  , "Turky"));
console.log(cityCounty("Islamabad" , "Pakistan"));
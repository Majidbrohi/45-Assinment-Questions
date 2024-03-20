// todo/-- 38. Cities: Write a function called describe_city() that accepts the name of
// todo/--  a city and its country. The function should print a simple sentence, such as
// todo/--  Karachi is in Pakistan. Give the parameter for the country a default value.
// todo/--  Call your function for three different cities, at least one of which is not in the
// todo/--  default country.

//? Firt step is to , making a function that describ's he city.

let describCity = (city : string , country : string = "USA")  =>  {
console.log(`City : ${city},Country : ${country}`)
}

describCity("Karachi" , "Pakistan"); 
describCity("Loss Angles" );
describCity("Washington DC" );
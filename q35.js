//todo/ 35. Animals: Think of at least three different animals that have a common characteristic.
//todo/ Store the names of these animals in a list, and then use a for loop to
// todo/print out the name of each animal.
//todo/ • Modify your program to print a statement about each animal, such as
//todo/ A dog would make a great pet.
//todo/ • Add a line at the end of your program stating what these animals have in
//todo/ common. You could print a sentence such as Any of these animals would
//todo/ make a great pet!.
// ? First step is to , three animals that heve same characterstic , storing the names of the animals in the list .
var animals = ["Deer", "Black bucks", "Markhor"];
//? second step is to , using for loop on aniimals(variable).
console.log("Names of animals.");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
//? Third step is to use if else statement to modify animals names withe something baout them.
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    if (animal === "Deer") {
        console.log("Deer is a beautiful creatuer , becuase of his beautiful horns , Skin and also for his eyes. it have delisuos meet.");
    }
    else if (animal === "Black bucks") {
        console.log("Black buks have most beatifull horns and also delisuos meet. it's just found in few of Asian's countries");
    }
    else if (animal === "Markhor") {
        console.log("Markhor have long rouded horns and also delisuos meet. it's just in Pakistan , it's Pakistan's national animal.");
    }
}
//? And the final step is printing what htese animals have in comman , becuase of these animals are mamel , live in whildlife , thsee are beautifull creature of Allah , and becuase of these aniamls Jungle look mor beeutifull.
console.log("\nStating what these animals have in common.");
console.log(" Any of these animals would make a great addition to wildlife beauty and grace.");

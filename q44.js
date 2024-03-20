//TODO/-- 44. Sandwiches: Write a function that accepts a array of items a person wants
//TODO/-- on a sandwich. The function should have one parameter that collects as many
// TODO/-- items as the function call provides, and it should print a summary of the sandwich
// TODO/-- that is being ordered. Call the function three times, using a different number
//TODO/--  of arguments each time.
//*First step is to , creating an array that accepts , sandwich summery in one parameter.
var makeSandwich = function () {
    var sandwichsummry = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwichsummry[_i] = arguments[_i];
    }
    //* then i console the summery withe the text using templete littrell.
    console.log("You orderd sandwich with ".concat(sandwichsummry));
};
//? Thirs step is to call the function three tims , using different number of armuments.
makeSandwich("Extra cheez ", " Paperoni ", " Tomatos");
makeSandwich("Onions ", " tomatos ", " Chili souce");
makeSandwich("choaped motton pieces ", " garlic souce ", " extra cheez ", " Onions");

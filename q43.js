// 43. Unchanged Magicians: Start with your work from previous Exercise. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//? First step is to , call the make great function.
//? Second step is to , writing a function (makeGreat)
var magicians11 = ["Anziq", "Hero Haudni", "David bleni", "Jagga jadogar"];
function makeGreat1(names) {
    return names.map(function (name) { return "The Great ".concat(name); });
}
function showMagicians12(names) {
    names.forEach(function (name) { return console.log(name); });
}
//?calling make great function with the copy of the array. 
var updatedMagicians = makeGreat1(__spreadArray([], magicians11, true));
//*Now showing original and updated arrays.
console.log("Original Array");
showMagicians12(magicians11);
console.log("\nupdated magicians");
showMagicians12(updatedMagicians);
//!Bingooooooooooooooooooo.//

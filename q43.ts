// 43. Unchanged Magicians: Start with your work from previous Exercise. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

//? First step is to , call the make great function.
//? Second step is to , writing a function (makeGreat)
let magicians11 : string[] =["Anziq" , "Hero Haudni" , "David bleni" , "Jagga jadogar"] ;

function  makeGreat1(names : string[]) :string[] {
    return names.map(name => `The Great ${name}`)

}
function showMagicians12(names : string[]): void {
names.forEach(name => console.log(name));
}
 

//?calling make great function with the copy of the array. 
let updatedMagicians = makeGreat1([...magicians11])
 
//*Now showing original and updated arrays.
console.log("Original Array")
showMagicians12(magicians11);

console.log("\nupdated magicians");
showMagicians12(updatedMagicians);


//!Bingooooooooooooooooooo.//
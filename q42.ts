// todo/-- 42. Great Magicians: Start with a copy of your program from Exercise 39.
// todo/--  Write a function called make_great() that modifies the array of magicians by adding
// todo/--  the phrase the Great to each magician’s name. Call show_magicians() to
// todo/--  see that the list has actually been modified.

//? First step is to starting from previous quesstion.
let magicians1 : string[] =["Anziq" , "Hero Haudni" , "David bleni" , "Jagga jadogar"] ;
function showMagicians1 (magicians : string[]) {
    //? I use forach loop to print each magician name in the array.
    magicians.forEach(magicians => console.log(  magicians))
}

showMagicians1( magicians1);

//? Second step is to, writing a function (makeGreat).
function  makeGreat() {
    magicians1.forEach(magicians1 => console.log(`The Great ${magicians1}`))
}
makeGreat();
 



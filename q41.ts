// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.


//? First step to make a array named magicians .
//? second step is to , pass that array into function.

let magicians : string[] =["Anziq" , "Hero Haudni" , "David bleni" , "Jagga jadogar"] ;
function showMagicians (magicians : string[]) {

    //? I use forach loop to print each magician name in the array.
    magicians.forEach(magicians => console.log(magicians))

}

showMagicians( magicians);
// TODO/-- 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


//? First step is to make a functin , that builds an object describing a music album.

function makealbum  (artist : string , albumtitle : string) : {artist : string , albumtitle : string} {

    //? here i ahve to return the object ehich containing the two pieces of information.
    const album = { artist , albumtitle};
    return album ;

}

console.log(makealbum("NFAK" , "Bazm-e-Janana."));
console.log(makealbum("John ELia" , "Akhri Mohabat."));
console.log(makealbum("Kaifi Khalil" , "Kahani Suno."));

 



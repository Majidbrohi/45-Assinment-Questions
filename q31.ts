// todo....................
/* 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed*/
 
 

// TODO (from excercis 30.)
let userNames : string[] = ["admin" , "Malik-e-Ashter" , "Zarrar Haider" , " Hafi Ali" , "Sultan Teepo" ];
userNames.forEach(adms => {
if(adms === "admin"){
 console.log(` Hello  ${adms}, would you like to see a status report?`);
 
}else{
   console.log(` Hello ${adms}, thank you for logging in again`);
}
 
});

//! Here we add if test , for checking wheather username have any ser or not , if no then i have prined thet staement , else the noather staement .
 userNames = [];
if(userNames.length === 0 ) {
    console.log("We need to find some new users.")
}else{
    console.log("you have some users here.")
}

//? becuae i have  users in the array for pritng the correct message , we make the array emty by aking the array's lenght 0  . so that i did the above code.

userNames.length = 0;
console.log("Now userlist is empty")

/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//todo• Make a list of five or more usernames called current_users.

//* Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//* Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
//*new username. If a username has not been used, print a message saying that the username is available.
//* Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
//? Here I made an array named "userNames1" .
var userNames1 = ["Anziq", "Sultan Teepo", "A.Raheem", "Ab.Kareem", "Zarrar Haider"];
//? Here I made another array named "usernames1" .
var newUsers = ["admin", "Malik-e-Ashter", "Zarrar Haider", " Hafi Ali", "Sultan Teepo"];
// ? Here loop throught the newUsers using Foreach loop , (To to check either it hase been taken or not.)
newUsers.forEach(function (user) {
    //? here i go throught the map method to make the names unCase sensitive , and also to search the elements. and printing messaes accordingly.
    if (userNames1.map(function (u) { return u.toLocaleLowerCase(); }).indexOf(user.toLocaleLowerCase())) {
        console.log("Sorry! ".concat(user, " Hase been already used."));
    }
    else {
        console.log("User name is availabele.");
    }
});
//*Map method : Array ky hr element pr ek function apply krta hy our ek naya array ko return krta hy jo ky function ky results sy anna hota hy

var username = ["Admin", "Zarrar", "Hunain", "Hassnain", "Shahadat"];
if (username.length === 0) {
    console.log("We need to find some users");
}
else {
    username.forEach(function (username) {
        console.log("Thanks ".concat(username, " for loging again."));
    });
    username.length == 0;
    console.log("There are no current users");
}
;

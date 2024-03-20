//Question no.#30
var username11 = ["Admin", "Zarrar", "Hunain", "Hassnain", "Shahadat"];
username11.forEach(function (username11) {
    if (username11 == "Admin") {
        console.log("Hello Admin, would you ike to see a status report?");
    }
    else {
        console.log("Hello ".concat(username11, " How are you."));
    }
});

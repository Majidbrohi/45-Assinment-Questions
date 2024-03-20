//Question no.#30
let username11:string[] = ["Admin" , "Zarrar", "Hunain","Hassnain", "Shahadat"]
username11.forEach(username11 => {
    if(username11 == "Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${username11} How are you.`)
    }
});
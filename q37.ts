//todo/-- 37. Large Shirts: Modify the make_shirt() function so that shirts are large
//todo/-- by default with a message that reads I love TypeScript. Make a large shirt and a
//todo/-- medium shirt with the default message, and a shirt of any size with a different
//todo/-- message.


//? First step is to modifying the make shirt function. SO now it prints the large shirt's size and mesage by default.
let tShirt1 = (size : string = "large" , msg : string = "I love Typescript"  ) => {
    console.log(`Size : ${size} , msg : ${msg}.`)

}


//? Final step is to , call the function with filled properties.
tShirt1()
tShirt1("medium" , "I love Pakistan");
tShirt1("small" , "48 Laws of Power");


//todo/ 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
//todo/ text of a message that should be printed on the shirt. The function should print
//todo/ a sentence summarizing the size of the shirt and the message printed on it.
//todo/ Call the function.

//? first step is to , making a function , withe parameters of size , msg
let tShirt = (size: string , msg : string) => {
console.log(`Shirt Size : ${size} , Message : ${msg}.`)
}


tShirt("small" , "Hello World");
tShirt("medieum" , "Pakistan Zindabad");
tShirt("large" , "There is no power on earth thet can undo Pakistan! 'QAMAJ' .");

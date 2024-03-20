
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guestList111 : string[] = ["Commander Khoala bint e asfar" , "Zarrar Haider" , " Hafi Ali" , "Sultan Teepo" ] ;
console.log("OH WOW! certely we found a bigger dinner table.")
 guestList111.unshift("Capt Anziq");

 //*Dr asl ham ny guestlist ky bilkul drmian men ek string add keny ky leay splice method ka istama kia ,
 guestList111.splice(Math.floor(guestList111.length / 2) ,0 ,"Lft Zahir Ali");

//*Array y end men element pus krny ky leay hem ny push method ka use kia.
guestList111.push("Flft Muzahir");

//*yaha ham ny foreach loop agaya jis ky sath ham ny ek message bhi hr guest ky nam ky agy lagaya.
guestList111.forEach(guest => console.log(`Dear ${guest} You're invited to the dinner`));





//*Explanation No.1 , Dr asl ham ny guestlist ky bilkul drmian men ek string add keny ky leay splice method ka istama kia , (SPlice method hamy allow krta hy ky ham kisi array men sy kuch remve kr sqen , or agr zarrorat ho to add bhi karen, ) , to basicly hamm ny spice method ky under math.floor ka se is leay kia ky hammy array ky bilkul centr men apna element dalna tha , is leay hamy pehly usky position ka pata hona zarrori tha , to ham ny array index ko math.floor ki maddad sy breakdown kia , or phir usy beech men ham ny by the using of splice method value add ki, to is scenario men kionky hammy kisi cheez ko delete jrna nhi tha is leay 
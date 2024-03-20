 
//todo--  Queston no.17 (Shrinking guest list);

let guestList:string[] = ["Maj.Zarrar Haider" , "Cap.Anziq Majid" , "Abid Pamhwar " , "Shaman shoomro" , "Jagga Dako","Commander Khoala bint e Asfar"];

console.log("Sorry,The new dinner table will not arrive on time for the dinner");
console.log("We are really very sorry, we just have space of two guests.");


//*Idhr ham ny pop methid is eay use kia hy taky y arra ky last sy element nikaly or phir usy return kry , while ki maddad sy batta dia kku yahi kaam krty hraho jab tk > 2 na bch jao.

while(guestList.length > 2){
    console.log(`${guestList.pop()} sorrry i can't invite you.`);
}
guestList.forEach(guest => console.log(`Dear ${guest} You're Still Invited`));
guestList.length = 0;
console.log("Now the guestList is empty" , guestList);
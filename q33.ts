//? 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

//?• Store the numbers 1 through 9 in a array.

//?• Loop through the array.

//? • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
//? 7th 8th 9th", and each result should be on a separate line.


//todo this i have to use methods and also someloops , like , witch mehtod , foreach loop  or maybe tmeolete letrrels.
 let Num : number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

//? I made thisi array, add numbers 1 to 9 .

// ? then i gothrow the foeEach loop  and under the loop i use swicth method to give conditions ,
 Num.forEach(ordnum => {

    // Here I make a variable wthe let keyword and assigned it;s vlue into string .
    let ordinal : String;

    // After it i use swithc method.
    switch (ordnum) {
    case 1  :
        ordinal = "1st" ;
         break;
    case 2 :
     ordinal = "2nd" ;
        break;
    case 3 :
        ordinal = "3rd" ;
        break;
    default :
    ordinal = ordnum + "th" 
    break;

    } 
    console.log(ordinal)
 })
     // Finly i loged the output . and now my output is, st
// 1st , 2nd , 3rd , 4th  , 5th , 6th , 7th ,  8th ,9th

// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
 

//* first step is to make a function thet stores information about a car in  object.
//*here i use tupels , becuse I know the specifice number of data i'll add but i don't know the data so i use tupes in key value pair ( here i use rest parameter)
// tuples  : ek qism ky data structure hoty hen jo ky fixed numbers ky elements ky data type  deifne kry hen, mgr zarrori nhi ky ek hi type ky data hu.. (//* BASICLLY HAM NY TUPLES KA ISTAMAL KEY VALUE PAIRS KO ISTAMAL KRNY KY EAY USE KIA HY)
function carsummry(manufacturer : string , model : string , ...extrinfos:[string , any][] ): Object { 

    //* Ek khali object ko yaha initialize kia gy ahy jisme meny gaddi ki informatin store ki hy.
    let carinfo : any = {
        manufacturer : manufacturer,
        model : model,
    };
    //* idhr ham ny extrainfo ko itrate kia , 
    extrinfos.forEach(([key , value]) => {
        carinfo[key] = value;
    });
    //*car info object return krwaya.
    return carinfo;
}
//* Yaha ham ny function ko call krky is men information store krdi hy.
let carr1 = carsummry("Suzuki" , "Jiminy" ,["color" , "Jungle Green"] , ["year" , 2023]  , ["sunroof" , true]);
//* function ko print krwaya. taky dekha ja sqy ky aya information store hue hy ya nhi.
console.log(carr1)

//?  there are three types of errrors , 
// Syntex error , type error ,runtime erros.

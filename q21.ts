
// QUestion no.21 (think of something you can store in a typecript's object)
// interfae is similer to type alias , so don't worry
//*Interface:  structure or ek blueprint banata hy ky jo hammara kam asan banata hy , is ky chnd fayaed hen , jesy ky , y hammary code ko readable banata hy,
//* code meantanibilty : is sy hammy bar bar type ko define krna nhi prta.
interface workersInfo  {
    Name:string;
    Age: number;
    Designation:string;
    Salary:number;
}

const workers: workersInfo[] = [
{Name : "Majid" , Age : 17 , Designation : "Programmer" , Salary : 15000},
{Name : "Zarrar" , Age : 19 , Designation : "Ai Expert" , Salary : 25000},
{Name : "CSAMB" , Age : 23 , Designation : "CAPTION" , Salary : 1000},

]

console.log("Worker's Information: ", workers);

//! INTERFACE : ek trha ka blueprint hot ahy jo ky objects ky structures ko define krta hy , y objects ky behavior ya structure ko describe karta hai.
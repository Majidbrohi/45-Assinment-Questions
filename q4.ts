 

let personName : string = "salahudin ayubi"
console.log(personName.toLowerCase())
console.log(personName.toLocaleUpperCase()) 
console.log(personName.replace(/b\w\,g/, v => v.toUpperCase())); //SO Tet we can convert the name in the title case.



// these are rugular expresions  , the first symbol shows , 
// /b  is stands for word boundry charecter , 
// \w uses to match any value in the targeted varable.
// and the '/' eds the regular epresions .  
// g is flag that sohes , globle , means its globaly useable (regular expresion)
// replace method sirf or sirf strings ko replace krta hy ,
//hm sirf \w ka istamal is leay nhi krty kionky y sirf signle word character ko hi replace krta hy .
// is leay hm w ky sath sath b bhi use krta hen

// agr hamy sirf nam ko replace krwana hy to ham just uska name ky agy naya nae likh deny replace method use krky

//Concluson :Bunyadi toor pr ham title case men convert ky leay ham replace method ka use krty hen , or replace method ky under ham regular expresions use krty hen , taky ham uska pehla work acses kr sqen , jo ky hm phir usy
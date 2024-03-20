
/*! 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
 after they log in to a website. Loop through the array, and print a greeting to each user:

 • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again*/

let userName : string[] = ["Malik-e-Ashter" , "Zarrar Haider" , " Hafi Ali" , "Sultan Teepo" ];
userName.forEach(adm => {
if(adm === "admin"){
 console.log(` Hello  ${adm}, would you like to see a status report?`);
 
}else{
   console.log(` Hello ${adm}, thank you for logging in again`);
}
});

/*!
is code men meny pehly ek array banaya , (array ek containor ka kam krt ahy  jo mukhtalif trha y data types ek sath sae rkhta hy, mgr aam toor pr ham ek hi type ka data rakhty hn, taky code more readabl or efficiant dikhy), array baany ky bad meny foreach loop lagya jis ki maddad sy ham ny array ky hr element ko access kia , or us y (Foreachloop usi element means orignol element ko acces krt hy) phir hM NY foreach loop ky ander hi  if else statement di ,( ky agr is array men kahi pr bhi amin hy to usy login hony ky ba y meesge dikhy or agr admin nhi koe aam user login kr raha y to usy diffrent msg dikhy.) */
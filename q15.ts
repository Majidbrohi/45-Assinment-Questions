// Question no.# 15(changing the guest list)
 let GuestList12:string[] = ["Commander Salahudin" , "Flight left Ab.Raheem" , "Cap.Anziq Majid"];
console.log(`Due to some conditions ${GuestList12.pop()} can't make this dinner`);
GuestList12.push("GM Brohi");
GuestList12.forEach(guest => console.log(`Dear ${guest} you're invited to the dinner.`))

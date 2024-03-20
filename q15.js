// Question no.# 15(changing the guest list)
var GuestList12 = ["Commander Salahudin", "Flight left Ab.Raheem", "Cap.Anziq Majid"];
console.log("Due to some conditions ".concat(GuestList12.pop(), " can't make this dinner"));
GuestList12.push("GM Brohi");
GuestList12.forEach(function (guest) { return console.log("Dear ".concat(guest, " you're invited to the dinner.")); });

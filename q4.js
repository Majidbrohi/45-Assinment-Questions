//  Question no.4(Name Cases)
var PName = "zarrar haider";
console.log(PName.toLowerCase());
console.log(PName.toUpperCase());
console.log(PName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//basicly we are using "regular expression".
/* "/ is a rugular expresin's start , "

\b: This is a word boundary anchor.
\w: This matches any word character (letter, digit, or underscore).
/: Delimiters that mark the beginning and end of the regular expression.
g: This is a flag that stands for "global," indicating that the regular expression should be applied globally throughout the string.
\b/*This is a shorthand character class that matches any word character*/ 

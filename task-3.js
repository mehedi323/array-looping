// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
var concertenString = '';

for(let elemant of numbers){
    concertenString += elemant;
}
console.log(concertenString);
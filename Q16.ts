//Q16: More Guests:You just found a bigger dinner table,so now more space is available.Think of three more guests to invite to dinner.
let myGuest:string[] = ["Nazia","Bushra","Faryal",]

myGuest.push("Afshan");
myGuest.push("Shazia");
myGuest.push("Muskan");
console.log(myGuest)

// .Start with your program from exercise 15.Add a print statement the end of your program informing people that you found a bigger dinner table.

// .Add one new guest to the beggining of your array.
myGuest.unshift("Uzma");
console.log(myGuest);

//add one new guest to the middle of your array
let guestMiddle:string = "Shani"
 let middleIndex = myGuest.length/2
 myGuest.splice(middleIndex,0,guestMiddle)
 console.log(myGuest)

 //use append() to add one new guest to the end of your list
 myGuest.push("Nazia")
 console.log(myGuest)

// final inviation list 

let newMessage:string = "I found a bigger place for dinner I hope you'll come"
console.log(`Dear ${myGuest[0]},${newMessage}`);
console.log(`Dear ${myGuest[1]},${newMessage}`);
console.log(`Dear ${myGuest[2]},${newMessage}`);
console.log(`Dear ${myGuest[3]},${newMessage}`);
console.log(`Dear ${myGuest[4]},${newMessage}`);
console.log(`Dear ${myGuest[5]},${newMessage}`);
console.log(`Dear ${myGuest[6]},${newMessage}`);
console.log(`Dear ${myGuest[7]},${newMessage}`);
console.log(`Dear ${myGuest[8]},${newMessage}`);


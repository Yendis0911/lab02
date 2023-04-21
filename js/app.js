let answer1 = prompt ("Are you from Georgia?").toLocaleLowerCase()
let answer2 = prompt ("Are you from America? ").toLocaleLowerCase()
let answer3 = prompt ("Have you ever travelled outside the country?").toLocaleLowerCase()
let answer4 = prompt ("Do you enjoy music?").toLocaleLowerCase()
let answer5 = prompt (" Do you have any children?").toLocaleLowerCase ()
if (answer1 === "yes"|| answer1 === "y") {
// console.log("I am from Georgia")
alert("Yes i am from Georgia")
}else{
// console.log("You are wrong about where im from")
alert ("You are wrong about where im from")
}
if(answer2 === "yes"|| answer2 === "y") {
// console.log("Yes I am from America")
alert("Yes I am from America")
}else{
// console.log("You are incorrect about what country i am from")
alert("You are wrong about what country I am from")
}
if (answer3 === "yes"|| answer3 === "y") {
// console.log("Yes I have travelled outside the country")
alert("Yes I have travelled outisde the country")
}else{
// console.log("You are incorrect")
alert("You are incorrect")    
}
if (answer4 === "yes"|| answer4 === "y") {
//  console.log("Yes I enjoy music")
alert("Yes I enjoy music")   
}else{
// console.log("You are incorrect about me not liking music")
alert("You are incorrect about me not liking music")    
}
if(answer5 === "yes"|| answer5 === "y") {
//  console.log("Yes I have children")
alert("Yes I have children")   
}else{
// console.log("You are incorrect")
alert("You are incorrect") 
}
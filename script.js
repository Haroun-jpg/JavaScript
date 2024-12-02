
var name = "Haroun";
console.log(name);
console.log(typeof (name));
var age=21;
console.log(age);
console.log(typeof(age));
/*for(let i=0; i<5; i++)/*
/*{console.log(i)};*/
let i=0;
/*while (i<5)
    {console.log(i);
    i++;
}*/
/*do {console.log(i);
    i++;
}while (i<5)*/

/*var age=20
if (age>=18){console.log("you are an adult")} 
 else {console.log("you are not")}*/
 
 /*var fruit="apple";
 switch (fruit)
 {
    case "banane":console.log("yellow fruit");
    break;
    case "apple": console.log("green fruit");
    break;
    case "strawberry": console.log("red fruit")
    break;
    default: console.log("unknown fruit")
 }*/

var str1="hello";
var str2="world";
let result= str1 + str2;
console.log(result)

let resulta2= str1.concat(str2)
console.log(resulta2)

console.log(str1.length)
console.log(str1.toUpperCase())

var str3="BONJOUR"
console.log(str3.toLowerCase())
console.log(str3.charAt(3))/*show the element of the index 3*/
console.log(str3.indexOf("O"))/*show the index of "O"*/

var str4="hello world";
console.log(str4.replace("world", "javascript")) /*replace a string by another one*/

var tab=[1, 2, 3, 4]
console.log(tab.length)/*show the length of the table*/

var tab1=tab.push(5)/*add an element to the table*/
console.log(tab1)
console.log(tab.pop())/*delete the last element in the table*/

var tab3=tab.shift();/*delete the first element of the table*/
console.log(tab)

var tab4=tab.unshift(0);/*add an elamant to front of the table*/
console.log(tab);
console.log(tab.indexOf(2));
console.log(tab.join("-"))/*turn the element of the table to a string*/

var arr=[6, 7, 8, 9, 10];
var resultat3= tab.concat(arr);/*gether the arr element with the tab elements in one table*/
console.log(resultat3)

var arr2=arr.slice(1, 3);/*get a part of the table from index 1 to 3 */
console.log(arr2)
let newArr=arr.map(x=> x*2);/*multiply each element of the table by 2 */
console.log(newArr)
let nouveaux=arr.filter(x=> x%2===0)/*filter pair numbers only*/
console.log(nouveaux)


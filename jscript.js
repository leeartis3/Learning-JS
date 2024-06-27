/*var a = 1; //this is a variable with a value of 1 assigned to it
var b = 2;

let age = 31;

console.log(b);


// In Line Comment - this means that the comment is at the end of a line of code 

/* 
This is a Multi-Line comment which lets you write comments on more than 1 line.
 Everything within the tags are considered comments 
*/

//Data Types and Variables

/* Javascript allows you to store variables with 7 different types of data 

1. undefined
2. null
3. boolean
4. string
5. symbol
6. number
7. object 


A variables allows computers to store and manipulate informationin a dynamic fashion. 

A variable is like a box that you can store any of the data types in. 

*/


//let myName = 'Lee'; //this assigns the string 'Lee' to the variable myName.

//Variables have to be declared using the kywords 'let' or 'const' 

//'Const' allows you to save a variable that can't be changed

//'Let' allows you to save a variable that can be changed. 



//Storing Values with Assignment Operators 

/*There is a difference between declaring variables and assigning variables 

*/

//Here's how you Assign a variable


/*
var a; // This is a variable declaratiion. Note: The semicolon is no longer needed. .

//People do tend to use semi-colons to determine where the line ends

var b = 2; // This is how you assign a value to a variable.

//In the example above we assigned the value 2 to variable b. 

//Since variable a is already declared, we can just go ahead and assign a value to it 

a = 7; // We changed the value of a to 7 

b = a; // We can also change the value of b to be equal to the value of variable a.

//To see these changes in the console, we use the method console.log(). This method prints the output of our code to the console. 

console.log(a)

console.log(b)//The output should be two 7s. 

//console.log(myName);//The output should be Lee 

//Initializing Variables with the Assignment Operator 

var a = 9; // In this example 'var a' is declaring the variable and '=' is initializing it with the assignment operator. 


//Uninitialized Variables

/* Before we do anything to the variables, they are in an uninitialized state. 

This means that the value of the variable is undefined. 

*/

/*
//Initialize these variables. Add the assignment operator '=' and give it a value. 
var a = 5;

var b = 10;

var c = "I am a"; 

//Do Not Change the code below

a = a + 1;// The output should be 6

b = b + 5; //The output should be 15 

c = c + " String!";// The output should be 'I am a String" 

console.log(a)

console.log(b)

console.log(c)



//Case Sensitivity in Variables 
/* Use camel case when naming variables 

For example, let firstName; is a proper way to declare the variable

*/

//Adding Numbers in Javascript 

/* Adding numbers in Java Script is simple 

*/



/*
var num = 10 + 1; 
console.log(num); //expected output is 11 


//Subtracting Numbers in Javascript

var difference = 45 - 40; 

console.log(difference);


//Multiplying Numbers

var product = 8 * 8; 

console.log(product);

//Dividing Numbers 

var quotient = 66 / 11;

console.log(quotient);

//Incrementing Numbers 

/* To increment a number means to add 1 to it. 

*/

/*
var myVar = 87;

//myVar = myVar + 1;// this is one way of incrementing.

//The other way to increment a number is to do (variable)++

myVar++; //this is the shorthand way of incrementing the value of a variable. 

console.log(myVar);


//Note: Both methods would give the same output 

//Decrementing a Number 

//Pretty much do the reverse of Incrementing a number

//instead of ++, we use -- to decerement a number 

var newVar = 67; 

//newVar = newVar - 1;

newVar--

console.log(newVar);

//Decimal Numbers 

//We can also create decimal numbers with Javascript 

var ourDecimal = 5.7;

//Compound Assignment with Augmented Addition 

var a = 3;

var b = 17;

var c = 12;

//Only Modify the code below this line:

/*
a = a + 12;

b = 9 + b;

c = c + 7;
*/

/*
//You can do the same operation above using shorthand 

a += 12;// this adds the value to the variable then assigns the new value to a 

b += 9;

c += 7;



console.log(a);//Output is 15
console.log(b);//Ouput is 26
console.log(c);//Output is 19

End Lesson 
*/


//Begin Lesson
/* 
//Augmented Subtraction 

var a = 11;

var b = 9;

var c = 3; 

/*
a = a - 6;

b = b - 15;

c = c - 1;

*/

/*
//Augmented Version 

a -= 6
b -= 15
c -= 1 

console.log(a);//Output is 5
console.log(b);//Ouput is -6 
console.log(c);//Output is 2 

End Lesson
*/



//Begin Lesson
/*
//Augmented Multiplication

var a = 5;
var b = 12;
var c = 4.6;

//Only Modify the code below this line:

/*
a = a * 5;
b = b * 3; 
c = c * 10;
*/

/*
//Augmented Version
a *= 5;
b *= 3;
c *= 10; 

console.log(a);//Output is 25
console.log(b);//Ouput is 36 
console.log(c);//Output is 46

End Lesson 
*/


/*
//Begin Lesson

//Augmented Division

var a = 48;
var b = 108;
var c = 33;

//Only Modify the code below this line:

/*
a = a / 5;
b = b / 3; 
c = c / 10;
*/

/*
//Augmented Version
a /= 12;
b /= 4;
c /= 11; 



console.log(a);//Output is 4
console.log(b);//Ouput is 27
console.log(c);//Output is 3

//End Lesson 

*/

/*
//Begin Lesson
// Declaring String Variables 

// anytime you see "" or '' or ``, these are called String Literals

//Example 
var firstName = "Alan"; 

var lastName = 'Turing';

var myFirstName = 'Beau';

var myLastName = 'Carnes'

console.log(firstName);
console.log(lastName);
console.log(myFirstName);
console.log(myLastName);


//End Lesson 

*/


//Escaping Literal Quotes in Strings 

//Sometimes your string will contains the '' symbol and you don't want it to be interpreted as code

//Example 
// conditional statements
// = If else, if, else, else if, switch
/*
If condition is true
Do this
else
    do this

MEANS IN JS    
if (condition) {
    lines of code
    } 
    else {
        other lines of code
    };
*/

// comparison operators:
/*
a == b (a is same value as b)
> greater than
< less than
a>=b (a is greater or equal to b)
a<=b (a is less than or equal to b)
a!=b (a is not equal to b)

i++ = i+1 +1 +1 etc...
*/

// switch statements multiple condition

/*
switch (variable or condition) {
    case "first": statements or lines of code;
        break;
    case "second": statements or lines of code;
        break;
    default: statements or lines of code
}

EXAMPLE:

var num = 5;
switch(num) {
    case 1: alert("number is 1");
    break;
    case 3: alert("number is 3");
    break;
     case 5: alert("number is 5");
    break;
     case 7: alert("number is 7");
    break;
    default: alert ("number is not specified")
};

*/

// Looping statements
// for, while, do while
// checks condition, as long as true, then do action

/*
for(intialization; condition statement; increment statement) {
    statement or lines of code
}

EXAMPLE:

var i;
for(i=1; i<=5; i++) {
    document.write(i);
}; 
 */

// ARRAYS 
/*
var number = new Array ();
number = [1,2,3,4,5];
alert (number[0]); // prints number 0
number [5]=6; // add 6 to the 6th position
number[4] = 7; // replaces 5 with 7

var number1 = ["one", "two", "three"];
alert (number1[1]);
*/

// more arrays in one variable:

/* var numValues = [1,2,3,4], [1,3,5,7], [7,8,9];

alert(numValues)[0][1]); // First number is array, second number is position in array

*/
---------------------------
/* Function

Function definition             

function functionName() {
    lines of code
}

to call a function call 

functionName();

example: function printHello(){
    alert("Hello");
}

printHello();

with values:

var num1 = 5;
var num2 = 6;

function sumNum(n1, n2) {
    var sum = n1 + n2;
    return sum;  // only one statement, all after return will not be executed
}
 var valSum = sumNum(num1, num2);
 alert("the sum is" + valSum)

 EXAMPLE:
 1.VARIABLES
var variableCode1 = 1
var variableCode2 = 2
2. FUNCTION
function functionName(functionVariable1, functionVariable2) {
    var theNewVariableInFunction = functionVariable1 + functionVariable2;
    return theNewVariableInFunction;
}
3. CALL function in a New Variable:
 var newVariableName = functionName(variableCode1, variableCode2);

4. Overwrite Varaibles in FUnction by calling and giving new values:
 alert(functionName(newValue1, newValue2)); // in this example just 2 other numbers. how does it work with strings and numbers?
 */ 

 /* *****************************

DOM MAnipulation Functions
changing the inner text of a paragraf:

document.getElementById("theId").innerText = "nicht mehr irgendeine Variable";
 

------
Calling the element in a variable:

var theVariableWeWantCall = document.getElementById("theId");

Calling the element easy:
theVariableWeWantCall.innerText = "nicht mehr irgendeine Variable";

 */

------------------

/* Click Event Functions
1. Call the function onclick-event from HTML
theNameOfTheFunctionWeCallWhenWeClick(){
    alert("you succesfully called the function by click");
}
*/

/* ADD EVENT LISTENR

1. GET ELEMENT BY ID          2.  and (with ".") 3. add event:
document.getElementById("button2").addEventLister("1. Events goes here, some event like mouseup, mousedown,click, hover, etc...", 2. Function goes here theNameOfTheFunctionWeCallWhenWeClick);
like this
document.getElementById("button2").addEventLister("click; theNameOfTheFunctionWeCallWhenWeClick);

all this inside a variable is cool:
1. just make a varaible and get the ID
var theVariableWhichAddsEvents = document.getElementById("button2");
2. the Name of the Variable with "." and add Eventlistener
theVariableWhichAddsEvents.addEventLister("click; theNameOfTheFunctionWeCallWhenWeClick);


*/ 
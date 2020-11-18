/*
This is multiline comment
*/

/*********************************

Variables and Data Types
*/

/*

var firstName = 'John';
console.log(firstName);

var lastName = "Smith";
console.log(lastName);

var age = 28;
console.log(age);

var fullAge = true;

var job;
console.log(job);

var job = 'Teacher';
console.log(job);

job = 'Manager';
console.log(job);

// Naming conventions:
// variables don't start with signs
// except with _underscore and $sing

var _3years = 3;
console.log(_3years);

var johnAndMark = 'John & Mark';
console.log(johnAndMark);

*/


/*****************************************

Variable Mutation and Type Coersion
*/

/*
Forcing to different data types stand together with string quotes in between
in Java = Concetination.
Age will be converted into a string
*/

/*

console.log(firstName + ' ' + age)

*/


// Declare multiple variables in one line and define them later:
// number (int in Java) and boolean will be converted into a String

// Type Coercion: Changing TYPE of variable

/*

var firstName, age, isMarried;


firstName = 'John';
age = 28;
isMarried = true;

console.log(firstName);
console.log(age);
console.log( ' Maritial Status of ' + firstName  + ': ' + isMarried);

*/

// Type Mutation: Changing VALUE of a variable

// in Java = reassgnment
/*


age = 'Twenty Eight';
job = 'Driver'

*/

/******************************************

Pop-up Windows in JS

    - Alert
    - Prompt

 There are three pop-ups in Java = alert, prompt, ?
*/ 


// ALERT informs the user?

/*

alert( ' Maritial Status of ' + firstName  + ': ' + isMarried);

*/

// PROMPT aske user fill in the dialogue box?
/*


var lastName = prompt('What is the last name?');
console.log(firstName + ' ' + lastName);

*/


/*******************************************

    * BASIC OPERATORS

*/

    // Math Operators
        
    //    (-) Substruction
    //    (+) Addition
    //    (*) Multiplication
    //    (/) Division

/*

var currentYear, ageJohn, ageSmith, yearJohn, yearSmith;

currentYear = 2020
ageJohn = 28;
ageSmith = 30;

yearJohn = currentYear - ageJohn;
yearSmith = currentYear - ageSmith;

console.log(yearJohn);
console.log(yearSmith);

console.log(currentYear + 33);
console.log(currentYear * 2);
console.log(currentYear / 2);
console.log(currentYear);

*/


    // Logical Operators

    // 

/*


var isJohnOlder = ageJohn > ageSmith;
var isSmithOlder = ageJohn < ageSmith;
    // the result is boolean -> false and true

console.log(isJohnOlder);
console.log(isSmithOlder);


    // revealing data type

console.log(typeof isJohnOlder);
    // result is String -> boolean

console.log(typeof ageJohn);
    // result is String -> number


console.log(typeof 'Smith is older than John');
    // result is String -> string

var x;
console.log(typeof x);
    // result is String -> undefined

*/


/**************************************

    * OPERATOR PRECEDENCE
    see resources/Operator precedence
*/

/*

var now = 2020;
var bdateJohn = 1989;
var fullAge = 18;

var isFullAge = now - bdateJohn >= fullAge;  
    // check precedence numbers in resources


console.log(isFullAge);  // true

    // grouping (...) has the highest precedence

var ageJohn = now - bdateJohn;
var ageMark = 35;
var avarage = (ageJohn + ageMark) / 2;


console.log(ageJohn);
console.log(avarage);


// Multiple assginments

var x, y;

x = y = (3+5) * 4 - 6;

console.log(x, y);



    // Associativity: direction of the operation
    // = assignment operator's associativity is right-to-left.

//  Operator Conventions

    // (x = x * 4) = (x *= 4)
    // (x = x + 10) = (x += 10)

var x = 5;
x *= 8;
x += 10; // 40 + 10 = 50
console.log(x);

//  Increment - discrement

//  x = x + 1; -> x += 1; // -> x++;

var y = 3;
y++;
console.log(y);

y--;
console.log(y);

*/

/*******************************
    CODING CHALLENGE
*/

/*
    Mark and John are trying to compare their BMI (Body Mass Index), which is calculated by using the formula BMI = mass / height^2. (mass in kg and hight in meter)
    
    1. Store Mark and John's mass and height in variables
    2. Calculate both BMIs
    3. Create a boolean variable containing information about whether Mark has a higher BMI than John
    4. Print a string to the console containing the variable from step 3 (Something like "is Mark's BMI higher than John's? true").
    
*/

/*

var massJohn, massMark, hJohn, hMark;

massJohn = 80; // kg
massMark = 72; // kg
hJohn = 1.78; // meters
hMark = 1.74; // meters

var bMiJohn = massJohn / (hJohn*hJohn);
var bMiMark = massMark / (hMark*hMark);



    // escape for apostrophy
console.log('John\'s BMI: ' + bMiJohn);
    // or double quote
console.log("Mark's BMI: " + bMiMark);

console.log(bMiJohn, bMiMark);

var z = 32/(4*4);
console.log(z);

var isJohnsBMIhigher = bMiJohn > bMiMark;

console.log("Is John's BMI higher than Mark's? -  "  + isJohnsBMIhigher);

*/


/**********************************************

        IF - ELSE STATEMENTS

*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}

else {
    console.log(firstName + ' will hopefully marry soon :) ');
}


// another way:

var isMarried = false;

if (isMarried) {
    console.log(firstName + ' is married!');
}

else {
    console.log(firstName + ' will hopefully marry soon :) ');
}




massJohn = 80; // kg
massMark = 72; // kg
hJohn = 1.78; // meters
hMark = 1.74; // meters

var bMiJohn = massJohn / (hJohn*hJohn);
var bMiMark = massMark / (hMark*hMark);


if (bMiJohn > bMiMark) {
    
    console.log('John\'s BMI is higher than Mark\'s');

} else {
    
    console.log('Mark\'s BMI is higher than John\'s');
    
}


*/


/**********************************************

    * BOOLEAN LOGIC
*/

/*

var firstName = 'Josh';
var age = 19;

if(age <= 13) {
    
    console.log(firstName + ' is a boy');
    
} else if (age >= 13 && age < 20) {
           
    console.log(firstName + ' is a teenager');

} else if (age >= 20 && age < 30) {
    
    console.log(firstName + 'is a young man');
               
} else {
    
    console.log(firstName + ' is a man');
}

*/



/*******************************************

     tHE TERNARY OPERATOR AND SWITCH STATEMENTS
*/

/*
var firstName = 'John';
var age = 16;

age > 18 ? console.log( firstName+ ' can get beer') : console.log(firstName + ' drinks juice');


        // assigning by boolean conditional

var drinks = age >= 18 ? 'beer' : 'juice';

console.log(drinks);

        // traditional if - else

if (age > 18) {
    
    var drinks = console.log('beer');
    
} else {
    
    var drinks = console.log('juice');
}

*/

/********************************************


        SWITCH STATEMENT
*/

/*
var job = 'teacher';

switch (job) {
        
    case 'teacher' : // OR
    case 'instructor' : // same result
        
        console.log(firstName + ' teaches how to code');
        break;
        
    case 'driver' : 
        
        console.log(firstName + ' drives school bus');
        break;
        
    case 'manager' :
        
        console.log(firstName + ' works in a bank');
        break;
        
        default :
        
        console.log(firstName + ' is jobless');
    }
*/


/*

// TASK: Write this if-else statemetn with SWITCH

var firstName = 'Josh';
var age = 19;

if(age <= 13) {
    
    console.log(firstName + ' is a boy');
    
} else if (age >= 13 && age < 20) {
           
    console.log(firstName + ' is a teenager');

} else if (age >= 20 && age < 30) {
    
    console.log(firstName + 'is a young man');
               
} else {
    
    console.log(firstName + ' is a man');
}
*/

/*
age = 13;

switch (true) {
        
    case age < 13 :
        
        console.log(firstName + ' is a boy');
        break;
        
    case age >= 13 && age < 20 :
        
        console.log(firstName + ' is a teenager');
        break;
        
    case age >= 20 && age < 30 :
        
        console.log(firstName + 'is a young man');
        break;
        
    default :
        
        console.log(firstName + ' is a man');
        
}

*/



/*************************************************
        
        TRUTHT and FALSY VALUES
*/

// FALSY VALUES : (Undefined, Null, 0, '', NaN) == false;

// TRUTHY VALUES: All non-falsy values

/*

var height;

if (height) {
    
    console.log('Veriable is defined');
   
   
} else {
    
    console.log('Variable is not defined');
}

    // 1: 0 is falsy


var weight = 0;

if (weight) {
    
    console.log('weight is defined');
   
   
} else {
    
    console.log('weight is not defined'); // result
}

    // 2: equation changes the condition

var weight = 0;

if (weight === 0) { // not the variable but equality is true
    
    console.log('weight is defined'); // result
   
   
} else {
    
    console.log('weight is not defined');
}

        // 3: This condition makes it defined

var weight = 0;

if (weight || weight === 0) {
    
    console.log('weight is defined'); // result
   
   
} else {
    
    console.log('weight is not defined');
}



// EQUALITY OPERATOR

// == VS ===

// == TYPE CONVERSION COERCION

var weight = 23;

if(weight == '23') {
    console.log('The == operator does type coersion')
}

if(weight === '23') {
    
    console.log('The === does make type coersion');
}

// === (strict equals) is the safest to use


*/


/**************************************************

        CODING CHALLENGE
        
                *   
                
    John's team scored: 89, 120, 103
    Mike's team scored: 116, 94, 123
    
    1. Avarage score of the each team
    2. Whic avarage wins, write on the board
    3. Change the scores and show different winners accordingly
    
    Extra: Mary plays basketball. Her team scores 97, 134, 105
    
    4. Log the avarage winner to the console. (&& operator)
    5. Change the scores to generate different winners. Keep in  mind that there might be draws.
*/

/*

var avaJohnsTeam, avaMikesTeam, avaMarysTeam;

console.log(avaJohnsTeam = (89 + 120 + 103) / 3);
console.log(avaMikesTeam = (116 + 94 + 123) / 3);
console.log(avaMarysTeam = (97 + 134 + 105) / 3);

var wins = true;

switch(wins) {
        
    case avaJohnsTeam > avaMikesTeam && avaJohnsTeam > avaMarysTeam :
        console.log('John\'s team wins by the score ' + avaJohnsTeam );
        break;
        
    case  avaMikesTeam > avaJohnsTeam && avaMikesTeam > avaMarysTeam :
        console.log('Mike\'s team wins by the score ' + avaMikesTeam);
        break;
        
    case avaMarysTeam > avaMikesTeam && avaMarysTeam > avaJohnsTeam :
        console.log('Mary\'s team wins by the score ' + avaMarysTeam );
        break;
        
        default :
        
        console.log('It is a draw');
}

*/


/******************************************

        20. FUNCTIONS
        
        dRY - don't repeat yourself
*/


// FUNCTION BLOCK == METHODS IN JAVA

    // keyword functionName (argument/parameter) {return}

    // Calling Function : call - store - print

/*

function calculateAge(birthYear) {
    var currentYear = 2020;
    return currentYear - birthYear;
}


var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1999);
var ageJane = calculateAge(1960);

console.log(ageJohn, ageMike, ageJane);



    // Multiple Arguments

    // retirement year calculation



function yearsUntilRetirement(birthYear, firstName) {
    
    // var age = calculateAge(birthYear);
    
    var age = calculateAge(birthYear)
    var retirementAge = 65;
    
    var yearsToRetirement = retirementAge - age;
    
    if(yearsToRetirement > 0) {
        
        console.log(firstName + ' retires in ' + yearsToRetirement + ' years');
    } else {
        
        console.log(firstName + ' has already retired');
    }
    
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike'); // -7. Already retired. Add if-else
yearsUntilRetirement(1969, 'Jane');

*/



/*******************************************************

        FUNCTION STATEMENTS AND EXPRESSIONS
        
*/


/*
//   1. Function Declaration

        function(job, firstName) {}


//   2. Function Expression


        var whatDoYouDo = function(job, firstName) {}

*/


/*
var whatDoYouDo = function(job, firstName) {
    
    switch(job) {
            
        case 'teacher' : 
            
            return firstName + ' teaches kids how to code';
            
            // no need for break with return
            
        case 'designer' :
            
            return firstName + ' designes beatiful shoes';
            
        case 'driver' :
            
            return firstName + ' drives school bus';
            
        default :
            
            return firstName + ' is looking for a job';
    }
}

// call the function
// since it returns something, either save it or print it


console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('driver', 'Mary'));
console.log(whatDoYouDo('designer', 'Kim'));
console.log(whatDoYouDo('engineer', 'Mike'));


    // you can call funtions in CONSOLE too


// Function Expressions produce a result, a value
// Function Statements do not produce result immediately

*/



/*********************************************************

                ARRAYS
                
    * Arrays start from index 0
    
*/

//      Two different ways of Array declaration/Initializing


/*
var names = ['John', 'Mark', 'Jane'];

var years = new Array(1990, 1996, 2000);




//      Accessing Arrays:

console.log(names);
console.log(names[0]);
console.log(names.length);


console.log(years);
console.log(years[1]);
console.log(years.length);



//  Mutating (reassigning in Java)

names[1] = 'Jim';

console.log(names);


//      Adding into Array

names[1] = 'Ben';
names[5] = 'Mary';
console.log(names); // -> ["John", "Ben", "Jane", empty × 2, "Mary"]

names[names.length] = 'Martha';
console.log(names); // -> ["John", "Ben", "Jane", empty × 2, "Mary", "Martha"]


//  Different Data Types

var john = ['John', 'Smith', 1990, 'teacher', false];

console.log(john);

john.push('blue');
john.unshift('Mr.');

console.log(john);

john.pop();
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);


console.log(john.indexOf(1990)); // 2
console.log(john.indexOf(23)); // -1

/*
console.log(john.indexOf('teacher') === -1 ? 'John is not a teacher' : 'John is a teacher');

*/

/*
var isJohnATeacher = john.indexOf('teacher') === -1 ? 'John is not a teacher' : 'John is a teacher';

console.log(isJohnATeacher);

*/

/*****************************************************

            CODING CHALLENGE
            
            
        John and his family ate in 3 different restaurants in holiday.
        
        John paid $124, $48, and $268.
        
        To tip fair amount, John created a tip calculator (as a function).  He likes to tip 20% of the bill when the bill is less than $50, %15 when the bill is between %50 and $200 and %10 when the bill is over $200.
        
        In the end, John would like to have 2 arrays:
        1. Containing all three tips(one for each bill).
        2. Containing all three final paid amounts (bill + tip)
        
        
        (Note: to calculate the %20 of a value, multiply it with 20/100 = 0.2)
*/



var bill;

function tipCalculator(bill) {
    
    if(bill < 50) {
        return bill * 0.2;
        
    } else if (bill >=50 && bill < 200) {
        
        return bill * 0.15;
    } else {
        
        return bill * 0.1;
    }
    
}


var tip = tipCalculator() ;

bills.push(bill);

var tips.push(tip);




































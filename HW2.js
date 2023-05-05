/*_____________________________________________________________________________________________
Name: Mishka Mohamed Nour 
Date: 5/5/2023 
Assignment: HW2.js 
Description: an adaptation of Homework 2 in Javascript. Code verifies if an ID is following a set 
						 of rules. 
________________________________________________________________________________________________*/
alert("Please enter a desired ID number made of 4-8 numbers that alternate in eveness and oddness and add up to an even number.") 
let id = prompt("Enter your ID: "); //get user input 
// declare variables 
let potentialId = Number(id); //convert the string into numbers 
let summation = 0; 
let digit = 0; //to break ID and check its summation 
let digitTest = 0; //to break ID into digits and check even/odd 
let pass = true; //to control the loop for even/odd condition
if (potentialId > 1000 && potentialId < 100000000) //check to see the value is within range 
{
  while (potentialId >1) //check if the id sum is even
  {
    digit = (potentialId % 10); 
    potentialId = potentialId/10; 
    summation += Math.floor(digit); 
  } 
  if (summation%2 == 0 && pass) // if it passes summation condition 
  {
  	let idDigits = Number(id); //reset potential ID 
  	 
  	while (idDigits>1 && pass) //check if each digit follows the rule of even and odd alternation
  	{
    	digitTest = Math.floor(idDigits) % 10; 
    	idDigits = idDigits/10;
      if(digitTest%2 == 0) //check the oddness of the next digit 
      {
      	digitTest = Math.floor(idDigits)%10; 
        console.log(digitTest);
        if(digitTest%2 ==0 && digitTest>1) //if odd number is not found in the right place 
        {
        	console.log('wrong odd pattern, please try again'); 
          pass = false; 
        }
        idDigits = idDigits/10; 
      }
      else //if even number is not found in the right place  
      {
      	console.log('wrong even pattern, please try again');
        pass = false; 
      }
    if (idDigits<1 && pass) //if the ID is correct 
  	{
    	console.log ('Your ID is: '+ id);
  		console.log ('summation = ' + summation); 
    	prompt('Your ID meets the rules! type accept or press enter to comfirm it');
 	 	}
  	}
  }
  
  else //for odd sumation 
  {
  	console.log ('odd summation, please try again'); 
  } 
}
else //for values smaller than 1000 and 100000000
{
	console.log ('Out of range value, please try again'); 
}

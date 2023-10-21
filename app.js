//CHAPTER N0 05

//Qs no 01:
//var num1 = +prompt("Enter a number");
//var num2 = +prompt("Enter a number");
//var result = num1 + num2;
//alert("Sum of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
//document.write("Sum of " + " "+num1+" " +"and " + " " +num2+" "+"is" + " "+result+"<br>");

//Qs no 02:
//var num1 = +prompt("Enter a number");
//var num2 = +prompt("Enter a number");
//var result = num1 - num2;
//alert("Subtraction of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
//document.write("Subtraction of " + " "+num1+" " +"and " + " " +num2+" "+"is" + " "+result+"<br>");

//var num1 = +prompt("Enter a number");
//var num2 = +prompt("Enter a number");
//var result = num1 * num2;
//alert("Multiplication of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
//document.write("Multiplication of " + " "+num1+" " +"and " + " " +num2+" "+"is" + " "+result+"<br>");

//var num1 = +prompt("Enter a number");
//var num2 = +prompt("Enter a number");
//var result = num1 / num2;
//alert("Devision of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
//document.write("Devision of " + " "+num1+" " +"and " + " " +num2+" "+"is" + " "+result+"<br>");

//Qs no 03:
// a. Declare a variable.
//var myVariable;

// b. Show the value of the variable after declaration.
//document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
//myVariable = 5;

// d. Show the initial value of the variable.
//document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
//myVariable++;

// f. Show the value of the variable after increment.
//document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
//myVariable += 7;

// h. Show the value of the variable after addition.
//document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
//myVariable--;

// j. Show the value of the variable after decrement.
//document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
//var remainder = myVariable % 3;

// l. Output the remainder.
//document.write("The remainder is: " + remainder + "<br>");

//Qs n0 04:
// Store the ticket price in a variable
//var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
//var numberOfTickets = 5;
//var totalCost = ticketPrice * numberOfTickets;

// Display the result
//document.write("Total Cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR.");
 
//Qs no 05:
//var number = parseInt(+prompt('Enter your number'));
//document.write("<p> Table of" + " " + number+  "</p>"+"<br>");
//for (i = 1 ; i <= 10 ; i++) {
//document.write(`${number} * ${i} = ${number*i} <br>`) 
//}

//Qs no 06:
//var celsius = parseFloat(prompt("Enter celsius"));
//const ferrenheit = (celsius * 9/5  + 32);
//document.write(`${celsius}°C is ${ferrenheit}°F <br>`);
//ferrenheit;
//const cel = (ferrenheit - 32 * 9/5)
//document.write(`${ferrenheit}°F is ${cel}°C <br>`);

//Qs no 07:
//var price1 = 650;
//var item1 = +prompt("Enter item1 your quantity");
//var price2 = 100;
//var item2 = +prompt("Enter your Items 2 quantity");
//var deliveryCharges = 100;
//var totalCost = (price1 * item1) +(price2 * item2) + deliveryCharges;
//document.write("Price of item 1 is " + " " + price1 + "<br>");
//document.write('Quantity of item 1 is'+" " + item1 + '<br>');
//document.write('Price of item 2 is' +" " + price2 + "<br>");
//document.write("Quantity of item 2 is" + " " + item2 + "<br>");
//document.write("Shipping Charges" + deliveryCharges + "<br>" );
//document.write(`Total cost of your order is ${totalCost} <br>`)

//Qs no 08:
//var totalMarks = +prompt('Enter Your Total Marks');
//var obtainedMarks = +prompt("Enter Your Obtained Marks");
//var percentage = (obtainedMarks / totalMarks) * 100;
//document.write('Total Marks :' + " "+ totalMarks + "<br>");
//document.write("Marks obtained :" + " " + obtainedMarks+ "<br>");
//document.write("Percentage :" + " " + percentage + "%" + "<br>");

//Qs no 09:
//var usDollars = 10;
//var saudiRiyals = 25;
//var usdToPakRupeeRate = 104.80;
//var saudiRiyalToPakRupeeRate = 28;
//var totalInPakRupees = (usDollars * usdToPakRupeeRate) + (saudiRiyals * saudiRiyalToPakRupeeRate);
//document.write("Total currency in PKR: " + totalInPakRupees);

//Qs no 10:
//var initialValue = "";
//var arithem = ((initialValue + 5) * 10) / 2;
//console.log(arithem);

//Qs no 11:
//var currentYear = 2023;
//var birthYear = 2002; 
//var age1 = currentYear - birthYear;
//var age2 = age1 - 1;
//document.write("Current year : " +currentYear +"<br>")
//document.write("Birth Year : " +birthYear +"<br>")
//document.write("Your age is : " + age1);

//Qs no 13:
//var radius = 5;
//var circumference = 2 * Math.PI * radius;
//var area = Math.PI * Math.pow(radius, 2);
//document.write("Radius of a circle: " + radius+ "<br>")
//document.write("The circumference is " + circumference.toFixed(2) + "<br>"); 
//document.write("The area is " + area.toFixed(2)); 

//Qs no 14:
//var snacks = "Chocolate Chip"
//var currentAge = 15;
//var expectAge = 65;
//var amountSnack = 3;
//var yourNeed = ( expectAge - currentAge) * amountSnack;
//document.write("Favourite Snacks :" + " " + snacks + "<br>");
//document.write("Current Age :" + " " + currentAge  + "<br>");
//document.write("Estimated Maximum Age :" + " " + expectAge + "<br>")
//document.write(`You will need ${yourNeed} Chocolate Chip to last until the ripe old age of ${expectAge}`);
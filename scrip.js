// //Create two variables, num1, and num2, and assign them any numerical values of your choice.
// let num1 = 10;
// let num2 = 5;
// //addition
// let addResult = (num1 + num2);
// console.log(addResult);
// //subtranction
// let subResult = (num1 - num2);
// console.log(subResult);
// //multiplication
// let mulResult = (num1 * num2);
// console.log(mulResult);
// //division
// let divResult = (num1 / num2);
// console.log(divResult);


// // Control Structures
// //Write an if statement that checks if a variable age is greater than or equal to 18. If true, display "You are an adult" in the console; otherwise, display "You are a minor."
// let age =20;

// if(age >= 18){
//   console.log("You are an adult.")
// }
// else{
//   console.log("You are a minor.")
// }

// //Data Types, Strings, and Arrays
// //Declare a variable name and assign it a string value representing your name.
// let name = "Meili";
// //Declare a variable age and assign it a numerical value representing your age.
// let ageOf = 36;
// //Declare an array colors with at least three color names of your choice.
// let colors = ["red", "yellow", "blue"]
// //Display the values of name, age, and colors in the console.
// console.log(`name: ${name} age: ${ageOf} colors: ${colors}`);


// //Dates and Math Objects
// //Create a new Date object and assign it to a variable currentDate.
// let currentDate = new Date();
// console.log(currentDate.toLocaleString());


// //Use a Math object method to calculate the square root of a number of your choice and display the result in the console.
// let rootNum = 2;
// function square(Num)
// {
//     return Num * Num;
// };
// console.log(square(rootNum));


// //Create and Access Objects
// // 1. Create a book object
// let book = {};

// //Add a title property
// //Add published property
// book = 
// {
//     title: "Math",
//     published: 2023,
//     keywords:["matrix", "theorem", "proof"]
// }

// //Add keywords array (include 3 keywords in the array that relevant to the book subject)
// book =
// {
//     title: "Math",
//     published: 2023,
//     keywords:["matrix", "theorem", "proof"],
//     author: {firstName:"Paul", lastName:"Lockhart"}
// }

// //Include a function inside of the object to return the title and the published year.
// console.log(book.title, book.published);

// //Create a function that accepts an array of numbers as an argument and returns the sum of all the numbers.
// let numbers = [10, 5, 3, 2, 6];

// function culculateSum(nums)
// {
//     sum = 0;
//     //use for loop add each number in nums list
//     for(i = 0; i < nums.length; i++)
//     {
//             sum += nums[i];                
//     }
//     return sum; 
// }
// console.log(culculateSum(numbers));

// //Create a function that accepts a string as an argument and checks if it is a palindrome (reads the same forwards and backward). 
// //Return true if it is a palindrome; otherwise, return false.

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Compare the original string with its reverse
//     const reversedStr = cleanedStr.split('').reverse().join('');
    
//     return cleanedStr === reversedStr;
//   }
  
//   console.log(isPalindrome("racecar"));
//   console.log(isPalindrome("hello"));
  
//    //In the JavaScript function, use window.innerWidth and window.innerHeight to get the current window width and height 
//   //window.location.href to get the current window URL, and check whether the window is open or closed.

//   function retrieveWindowProperties() {
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const windowURL = window.location.href;
//     const isWindowOpen = !window.closed;
  
//     // Create a new HTML page to display window properties
//     const newPageContent = `
//       <html>
//       <head>
//         <title>Window Properties</title>
//       </head>
//       <body>
//         <h2>Window Properties:</h2>
//         <p>Width: ${windowWidth}px</p>
//         <p>Height: ${windowHeight}px</p>
//         <p>URL: ${windowURL}</p>
//         <p>Is Window Open: ${isWindowOpen ? 'Yes' : 'No'}</p>
//       </body>
//       </html>
//     `;
  
//     // Open a new window with the properties
//     const newWindow = window.open();
//     newWindow.document.write(newPageContent);
//   }
  
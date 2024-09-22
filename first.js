// ************** practice**************** 
// let a = 4 

// let b = 5 
// result= a+b;

//  console.log( result); 

//  const c = 4  
//  const d = 3 
//  answerdedo = c+d
//  console.log( answerdedo ); 

// ***

// var a = 3*4; 
// var a = 5+5;
// console.log(a) 


// const student = {
//   fullName: "saurabh gupta" ,
//   age : 89 ,
//   cgpa : 8.7,
//    isPass : true ,
// } ;

// student["fullName"] = "saurabh gupta";

// console.log( student ["fullName"]); 

// *************  example ************** 
// const product = { 
//   title: "Ball Pen",
//   rating : 4,
//   offer : 5,
//   price: 342,
// }; 

// console.log(product); 


// const profile = { 
//   userName: "shardh khapra",
//   followers: 8984999,
//   following: 3939
//   post: 342,

// } 

// console.log(sauaaaaaa)

// console.log(" saurabhhh ");



// operator *********************** 


// let a = 4 ; 
// let b = 2 ; 
// console.log( " a-b=", a-b);
// console.log( " a+b=",a+b);
// console.log( " a*b=",a*b);
// console.log( " a/b=",a/b);


// //  console.log( "hello world ")
// console.log( " a % b = ",a % b );
// console.log( " a**b=", a**b);


// increment & decrement 

// arithmetic operators ******************* 

// let a = 7 
// let b = 4 
// console.log( " a = " , a, " & b = ", b);

//  console.log(" a++" , a--);    // a++ , ++a , a--, --a ***** use 
// console.log( a ) 
// a += 4 ; 
// console.log( " a +=4 ",a ) 

 

//  // modullus *************** 

// let a = 4 
// let b = 3 
// console.log ( " a % b " , a%b);  



// // exponentiation ************* 
// //  2 power 3 = 2*2*2 = 8 

// let a = 4  
// let b = 3 
//   //   // define :- a**b means ( 4power 3 = 64 )
// console.log( " a**b", a**b);   


// increment (a++)  decrement ( a--) * ************ 

// let a = 5 
// let b = 4 
// a++         // comdition 
// a = a+1     // condition 
// a--         // condition 
// a = a-1      // condition 
// --a           // condition 

// console.log("a++", a++); 
// console.log("a+1", a+1); 
// console.log(--a) 
// ============================================== 


// Asignment operator   

// let f = 8;
// let d = 6 ;

// f %= 5;   // a=a+5 
// console.log( "f = ",f);  //9 
// ====================================================== 


// comparison operator  

// let a = 3 
// let b = 4 
// console.log ( a===b) 
// ==========================================================  


// Logical operator  

// logical AND &&  

// let a = 5
// let v = 5  

// let cond1 = a != v ;
// let cond2 = a < v ; 

// console.log( cond1 && cond2); 

//  logical or ||  

// let a = 4 
// let b = 5 

// console.log( a < b || a==b);  // true ;  

// logical not ! //

// let a = 5 
// let b = 8 

// console.log("cond1", !(a < b)); // true  
// ====================================================  



//   Conditional Statement   

// If and else statement 

// let age = 12 ;

// if (age >= 18){
//   console.log("you can vote");
// } else {
//   console.log("you can not vote");
// } 


// ************************************************************ 
//  question 
// let a = 11;

// if ( a % 2 ==0){
//   console.log( a ,"even");
// } else { 
//   console.log( a ,"odd");
// }
//  ===============================================  


// else-if Statement 

// let age = 34;
//  if ( age < 18 ){
//       console.log("junior");
//  } else if ( age > 60 ){
//       console.log("senior");
//  } else {
//       console.log("middle");
//  } 
// ==================================================

// ************************ 
// let k = 34 ;

// if ( k < 18  ){
//   console.log("pranam");

// } else if ( k > 56 ){
//   console.log("namste");

// } else {
//   console.log("nothing");
// } 
// ================================ ============================== 

// ternary operator ****************  
// let age =  2 ;

// let result = age>18? "adult" : " not adult " ;
// console.log(result); 



 // alert ("hello"); // one time popup .|

 
 
//  let name = prompt("hello");
//  console.log(name);

// question *********** 

// *****  Get user to input a number using prompt ("Enter a number:"). 
// Check if the number is a multiple of 5 or Not . 

// Solve:-  

// let num = prompt ("Enter a number"); 

// if ( num% 3 ===0){
//       console.log(num, "is multiple of 3");

// } else {
//       console.log(num, "is not multiple of 3")
// } 
// ********************************************************************** 


// //  write a code which can give grades to students according to their Score. 
//  // (90-100,A ) , (70-89,b), (60-69,c), (50-59,d) , (0-49,f) 

// //  Solve :- .

// let score = prompt (" enter your score (0-100):");
// let grade ; 

// if ( score >= 90 && score <=100){
//     grade = "A";
// } else if ( score >=70 && score <=89){
//     grade = "B";
// } else if (score >=60 && score <=69){
//     grade = "C";
// } else if ( score >=50 && score <=59){
//     grade = "D";
// } else if ( score >=0 && score <= 49){
//     grade = "F";
// }

// console.log("according to your score",  grade );

// ====================================================================== 
// ======================================================================
// ======================================================================
// ======================================================================




// **********************************************************************
// **********************************************************************

// // LOOPS IN JAVA 

// // for loop 

// for ( let i=1; i<=10; i++){
//   console.log("apna college ", i)
// }

// *********************************************


// // calculate sum of 1 to 5 

// let sum = 0;
// let n = 6;
// for ( let i=1; i<=n; i++){
//     sum = sum+i;
// }
// console.log("sum=", sum );
// ******************************************************* 

// // WHILE LOOP :- 

// let i = 1;
// while ( i <= 10){
//   console.log("apna college" );
//   i++;
// } 




















 
 



 







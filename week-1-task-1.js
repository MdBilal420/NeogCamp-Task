//   //                    NeogCamp
//    // week 1 Assignment
// // Task-1
//  //console.log('Mohammad Bilal');


// //Task-2

//   //var readlineSync = require('readline-sync');

// //  var username = readlineSync.question('Enter Your Name: ');
// //  console.log(username);


// // Task-3
// //var username = readlineSync.question("What's your Name: ");
// // console.log('Welcome ' + username);


// // Task-4
//   var readlineSync = require('readline-sync');
// //  var username = readlineSync.question("What's your Name: ");
// //  console.log('Welcome ' + username);


// //Task-5
// //var answer = readlineSync.question('Is you Age greater than 18? ')
// // if(answer == 'yes'){
// //   console.log('Right');
// // }else{
// //   console.log('Wrong');
// // }


// //Task-6
// //score = 0;
// // var villain = readlineSync.question("Who is the villain in The Dark Knight ?"); 
// // if(villain == 'Joker'){
// //   score = score + 1;
// //   console.log('Correct');
// // }else{
// //   console.log('Incorrect');
// //   score = score -1;
// // }
// // var answer = readlineSync.question('Who is BATMAN? ')
// // if(answer == 'Bruce Wayne'){
// //   console.log('Right');
// //   score = score + 1;
// // }else{
// //   console.log('Wrong');
// //   score = score -1;
// // }
// // console.log('Your Score is ' + score);


// // Task-7
// // function add(numOne,numTwo){
// //   console.log('Number One: ' , numOne , ' Number Two: ' , numTwo)
// //   var sum = numOne + numTwo;
// //   return sum;
// // }

// // function prod(numberOne, numberTwo){
// //   console.log('Number One is ' +numberOne+ ' and Number Two is ' +numberTwo)
// //   var prod = numberOne * numberTwo;
// //   return prod;
// // }

// // var result = prod(4,5);
// // console.log(result);

// // console.log(add(6,7));
// // var add = add(15,25);
// // console.log(add);



// //Task-8
// // score = 0;
// // function quiz(question,answer){
// //   var userAnswer = readlineSync.question(question);
// //   if(answer === userAnswer){
// //     score= score+3;
// //     console.log('You are Correct!');
// //   }else{
// //     console.log('You are Wrong!');
// //     score = score -1; 
// //   }
// //   // return score;
// //   // console.log('Your Score is: ' + score);
// // }

// // quiz("Am i older than 25? ",'No');
// // quiz("What's my favourite sport? ",'Football');
// // quiz("Who's my favourite player? ",'Ronaldo');
// // console.log('Your Score is: ' + score);

// //Task-9
// // for(var i = 1; i<6;i++){
// //   console.log( i + ' Mohammad Bilal');
// // }

// //Homework


// // Star Pattern
// //var num = readlineSync.question('Enter Number of Stars: ');
// // for(i=1;i<=num;i++) {
// //   var str="";
// //   for(j=1;j<=i;j++) {
// //     str+="* ";
// //   }
// //   console.log(str);
// // }
// // console.log('Bonus Inverted Star Pattern')
// // for(i=1;i<=num;i++) {
// //   var str="";
// //   for(j=num;j>=i;j--) {
// //     str+="* ";
// //   }
// //   console.log(str);
// // }


// //Task-10
// // var grocceryList = ['Cake','Milk','Pen','Paper','Pencil'];
// // console.log(grocceryList[0]);
// // console.log(grocceryList[2]);
// // console.log(grocceryList[4]);
// // console.log(grocceryList.length);
// // console.log(grocceryList[grocceryList.length - 1]);

// // Task-11
// // var grocceryList = ['Cake','Milk','Pen','Paper','Pencil'];
// // for(var i = 0;i<grocceryList.length;i++){
// //   console.log(grocceryList[i]);
// // }

// // Task-12
// //var superman = {
// //   name: "superman",
// //   power: "flight",
// //   costumeColor: "blue",
// //   strength: 10000,
// //   stealth: 0,
// //   intelligence: 100,
// // }


// // var batman = {
// //   name: "batman",
// //   power: "martial arts",
// //   costumeColor: "black",
// //   strength: 100,
// //   stealth: 100,
// //   intelligence: 1000,
// // }

// // console.log('superman strength: '+superman.strength);
// // console.log('batman strength: '+batman.strength);
// // console.log(superman.stealth < batman.stealth)

// // Homework
// // var superHeros = [{
// //   name: "superman",
// //   power: "flight",
// //   costumeColor: "blue",
// //   strength: 10000,
// //   stealth: 0,
// //   intelligence: 100,
// // },{
// //   name: "batman",
// //   power: "martial arts",
// //   costumeColor: "black",
// //   strength: 100,
// //   stealth: 100,
// //   intelligence: 1000,
// // }];

// // for(var i = 0; i< superHeros.length; i++){
// //   console.log('Super Hero: ', superHeros[i].name,', Super Hero Costume Color: ',superHeros[i].costumeColor);
// //   console.log("----------")
// // }

// // Task - 13
// // questionOne ={
// //   question: "Full form of JS ? ",
// //   answer: "JavaScript"
// // }

// // questionTwo ={
// //   question: "Full form of MS? ",
// //   answer: "Microsoft"
// // }


//Task-14
 var readlineSync = require('readline-sync');
 const chalk = require('chalk');
 console.log("Welcome to the Quiz");
 var username = readlineSync.question('Enter your Name: ');
 console.log('Welcome,' , username, 'Let\'s Start the Quiz!! ');
 console.log('write the correct answer')

 var questions = [
   {question: `Is my name really Bilal?`,A: 'Yes', B:'NO', C:'Maybe',answer: 'a'},
   {question: `Name of my hometown?`,A: 'Delhi', B:'Lucknow', C:'NewJersey',answer: 'b'},
   {question: `Who am i seriously?`,A: 'Engineer', B:'Doctor', C:'Not Doctor Not Engineer',answer: 'a'},
   {question: `Who's my favourite player?`,A: 'Ronaldo ', B:'AB De Villiers', C:'Both',answer: 'c'},
   {question: `I can't live without ?`,A: 'Mobile', B:'Laptop', C:'Oxygen',answer: 'c'},

 ];

for(var i = 0;i<questions.length;i++){
  var n = i+1;
  console.log(chalk.inverse(n+'. '+questions[i].question));
  console.log('[a,b,c]');
  console.log(chalk.cyan('A: '+questions[i].A));
  console.log(chalk.cyan('B: '+questions[i].B));
  console.log(chalk.cyan('C: '+questions[i].C));
  console.log('');
  var answer = readlineSync.question('Answer: ');

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    console.log(chalk.bgGreen('Correct'));
    
  }else{
    console.log(chalk.bgRed('Incorrect'));
    
  }
}

  console.log(chalk.yellow(`Congratulations !\n Let's know each other on https://twitter.com/mdbilal420 `))
   
console.log(chalk.red(username +' you did great on this quiz.'));

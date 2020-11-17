//JavaScript - CLI Quiz



const chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log(chalk.red('Marvel Quiz'));
console.log(chalk.green('A quiz from our favourite comic series '))
console.log(chalk.yellow('Write the correct answer :'))
console.log('Points:  Correct: +3   Incorrect:-1')
console.log('');

var username = readlineSync.question('Enter Your Name: ');

var questions = [
   {question: `CAPTAIN AMERICA: CIVIL WAR: Who ISN'T on Iron Man's team?`,A: 'Black Panther', B:
   'Vision', C:'Hawkeye',answer: 'Hawkeye'},
   {question: `DOCTOR STRANGE: What type of doctor is Stephen Strange?`,A: 'Plastic Surgeon', B:
   'Neurosurgeon', C:'Trauma Surgeon',answer: 'Neurosurgeon'},
   {question: `What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?`,A: '2008', B:'2009', C:'2010',answer: '2008'},
   {question: `What is the name of Thor’s hammer?`,A: 'Vanir', B:
   'Mjolnir', C:'Aesir',answer: 'Mjolnir'},
   {question: `What is Captain America’s shield made of?`,A: 'Adamantium', B:
   'Carbonadium', C:'Vibranium',answer: 'Vibranium'},

 ];
var score = 0;
var best = 5;
for(var i = 0;i<questions.length;i++){
  console.log(i+1);
  console.log(chalk.inverse(questions[i].question));
  console.log(chalk.cyan('A: '+questions[i].A));
  console.log(chalk.cyan('B: '+questions[i].B));
  console.log(chalk.cyan('C: '+questions[i].C));
  var answer = readlineSync.question('Answer: ');
  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    console.log(chalk.bgGreen('Correct'));
    score = score + 3;
  }else{
    console.log(chalk.bgRed('Incorrect'));
    score = score -1;
  }
  if(score > best){
    console.log(chalk.green('Congratulations ! This is the best score '))
    best = score
  }

}

console.log(chalk.bgGreen('Your Final Score is: ', score));

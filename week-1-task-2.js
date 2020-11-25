//JavaScript - CLI Quiz


var readlineSync = require('readline-sync');
const chalk = require('chalk');
var username = readlineSync.question('Enter Your Name: ');

console.log(chalk.red('Suits Quiz'));
console.log(chalk.green(`“You always have a choice.” - Harvey Specter`))
console.log(chalk.yellow('Write the correct option.'))
console.log('Points:  Correct: +3   Incorrect: -1')
console.log('');



var questions = [
   {question: `Who is the female shark in charge of the 'Suits' law firm?`,A: 'Rachel Zane', B:
   'Jessica Pearson', C:'Donna Paulsen',answer: 'b'},
   {question: `Who lands an interview with Harvey Specter after he runs from a drug deal gone bad?`,A: 'Jeff Malone', B:
   'Sean Cahill', C:'Mike Ross',answer: 'c'},
   {question: `The firm hires law graduates from ________?`,A: 'Harvard', B:'Stanford', C:'Oxford',answer: 'a'},
   {question: `How does Louis figure out that Mike didn't attend Harvard?`,A: 'Knight of Columbus', B:
   'Key Largo', C:'Order of the Coif key',answer: 'c'},
   {question: `What law exam did Mike charge to take for others?`,A: 'SAT', B:
   'LSAT', C:'ACT',answer: 'b'},

 ];
var score = 0;
var best = 5;

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
    score = score + 3;
  }else{
    console.log(chalk.bgRed('Incorrect'));
    score = score -1;
  }
}
if(score > best){
    console.log(chalk.yellow('Congratulations ! This is the best score \n'))
    best = score
  }
console.log(chalk.red(username +' your final score is: '+ score));

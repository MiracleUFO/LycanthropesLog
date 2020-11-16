let journal = [];

function DayObject (dayId, eventsArr, turnedOrNot) {
	this.dayId = dayId;
	this.events = eventsArr;
	this.turnedOrNot = turnedOrNot;
}

let dayCount = 1;
function ObjInst () {
  console.log("Hello, human. It's a new day. Please log in your day's events.\n");
  let dayId = '~Day ' + dayCount +'~  ';
  dayCount++;
  let events = prompt('Enter day\'s events separating with commas');
  let eventsArr = 'Events: ' + events.split(',') + ', ';
  let turned =  confirm('Did you transform to a werewolf on this day?\n');
  let turnedOrNot = 'Turned? ';

  if (turned) {
    turnedOrNot += 'Yes';
  } else { turnedOrNot += 'No';}

  let dayObj = new DayObject(dayId, eventsArr, turnedOrNot);
  return dayObj;
}

function journalAdd () {
  journal.push(ObjInst());
}

journalAdd();

let newDay;
for (let i = 2; i <= 14; i++){
   newDay = confirm('Is it a new day already?')
   if (newDay==true) {
   console.log('\nDay',i);
   journalAdd();
   } 
   if (newDay==false){
     i--;
   }
  }

console.log('\n\nHere\'s your log for the past 2 weeks:\n\n');let journal = [];

function DayObject (dayId, eventsArr, turnedOrNot) {
	this.dayId = dayId;
	this.events = eventsArr;
	this.turnedOrNot = turnedOrNot;
}

let dayCount = 1;
let ObjInst = () => {
  console.log("Hello, human. It's a new day. Please log in your day's events.\n");
  let dayId = '~Day ' + dayCount +'~  ';
  dayCount++;
  let events = prompt('Enter day\'s events separating with commas');
  let eventsArr = 'Events: ' + events.split(',') + ', ';
  let turned =  confirm('Did you transform to a werewolf on this day?\n');
  let turnedOrNot = 'Turned? ';

  if (turned) {
    turnedOrNot += 'Yes';
  } else { turnedOrNot += 'No';}

  let dayObj = new DayObject(dayId, eventsArr, turnedOrNot);
  return dayObj;
}

let journalAdd = () => {
  journal.push(ObjInst());
}

journalAdd();


let newDay;
for (let i = 2; i <= 14; i++){
   newDay = confirm('Is it a new day already?')
   if (newDay==true) {
   console.log('\nDay',i);
   journalAdd();
   } 
   if (newDay==false){
     i--;
   }
  }

console.log('\n\nHere\'s your log for the past 2 weeks:\n\n');
journal.map(entries => console.log(Object.values(entries).join('') + '\n'));
console.log('\nPizza seems to be what makes you turn');

journal.map(entries => console.log(Object.values(entries).join('') + '\n'));
console.log('\nPizza seems to be what makes you turn');

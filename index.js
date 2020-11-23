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

console.log('\n\nHere\'s your log for the past 2 weeks:\n\n');let journal = [];let journal = [];

function DayObject (dayId, eventsArr, turnedOrNot) { //Instatiates objects for storing data from daily log

	this.dayId = dayId;
	this.events = eventsArr;
	this.turnedOrNot = turnedOrNot;
}

let dayCount = 1;
let ObjInst = () => { //Interacts with user and accepts daily entries to store in journal

  console.log("Hello, human. It's a new day. Please log in your day's events.\n");
  let dayId = '~Day ' + dayCount +'~';
  dayCount++;
  let events = prompt('Enter day\'s events separating with commas');
  let eventsArr = events.split(',');
  let turned =  confirm('Did you transform to a werewolf on this day?\n');
  let turnedOrNot = 'Turned? ';

  if (turned) {
    turnedOrNot += 'Yes';
  } else { turnedOrNot += 'No';}

  let dayObj = new DayObject(dayId, eventsArr, turnedOrNot);
  return dayObj;
}

let journalAdd = () => { //Takes entries from interaction and stores in journal

  journal.push(ObjInst());
}

journalAdd();

let newDay;
for (let i = 2; i <= 14; i++){ //Iterates interactions for two weeks

   newDay = confirm('Is it a new day already?')
   if (newDay === true) {
   console.log('\nDay',i);
   journalAdd();
   } 
   if (newDay === false){
     i--;
   }
  }

let foundCause = (() => {

  let daysTurned = journal.filter((object) => object.turnedOrNot === 'Turned? Yes');  //Isolates the days user turned to pinpoint cause

  let events = [], eventsComb = [], occurences = [], prevEvent; 


daysTurned.map((day) => { //Collects user's events on days user turned
  events.push(...day.events);
});

events.sort();
for (let i = 0; i  < events.length; i++) { //Finds how often all events occur and stores information
	if (events[i] !== prevEvent) {
		eventsComb.push(events[i]);
		occurences.push(1);
		} else {occurences[occurences.length-1]++}
			prevEvent = events[i];
		}

let max = Math.max(...occurences);
 
let indexArr = [];

const allEqual = arr => arr.every(v => v === arr[0]);

if (!allEqual(occurences)) {
  occurences.reduce((Arr, occurence, index) => //Finds most occuring event for all days user turns
 {if (occurence === max) {
   indexArr.push(index);
   return Arr;
   }
   }, []);
}

 let causes = [];

indexArr.map((index) => causes.push(eventsComb[index]));

 console.log('\n\nHere\'s your log for the past 2 weeks:\n\n');
 journal.map(entries => 
 console.log(`${entries.dayId}    events:${entries.events}   ${entries.turnedOrNot}`)
 );

if (causes.length > 0) {
   console.log(`The fact that you ${causes} seems to be what makes you turn`);
} else {
  console.log('The data given is not sufficient to draw conclusions. Please log again.')}
 return causes;
})()


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

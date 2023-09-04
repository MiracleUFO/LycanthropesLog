const journal = [];

function DayObject(dayId, eventsArr, turnedOrNot) { 
  // Instatiates objects for storing data from daily log
  this.dayId = dayId;
  this.events = eventsArr;
  this.reacted = turnedOrNot;
}

console.log('\x1b[32mWelcome to the app! \x1b[0m\n');
console.log('\x1b[95mWe\'re going to help you find the cause(s) of your allergies.\x1b[0m\n');

let noOfDaysToIterate = 0;

const chooseNumberOfDaysToIterate = () => {
  noOfDaysToIterate = prompt('Enter no. of days to journal for. Currently 0 (will default to 14):');

  if (Number.isNaN(Number(noOfDaysToIterate))) {
    chooseNumberOfDaysToIterate();
  } else {
    noOfDaysToIterate = Number(noOfDaysToIterate);
    console.log('\n');
  }
}


let dayCount = 1;
let ObjInst = () => {
  // Interacts with user and accepts daily entries to store in journal
  console.log('Hello, human. It\'s a new day. Please log in your day\'s events.\n');
  
  let dayId = '-Day ' + dayCount + '-';
  dayCount++;
  let events = prompt('Enter day\'s events separating with commas');
  let eventsArr = events.split(',');
  eventsArr = eventsArr.map((event) => event.toLowerCase().trim());
  let turned = confirm('\x1b[95mDid you have an allergic reaction on this day?\x1b[0m');
  let turnedOrNot = 'Reacted? ';

  if (turned) {
    turnedOrNot += 'Yes';
  } else { turnedOrNot += 'No'; }

  let dayObj = new DayObject(dayId, eventsArr, turnedOrNot);
  return dayObj;
}

const journalAdd = () => { 
  // Takes entries from interaction and stores in journal
  journal.push(ObjInst());
}

chooseNumberOfDaysToIterate();
journalAdd();

for (let i = 2; i <= (noOfDaysToIterate || 14); i++) { 
  // Iterates interactions for no of days set by user or two weeks
  const newDay = confirm('\x1b[95mIs it a new day already?\x1b[0m');

  if (newDay === true) {
    console.log(`\n\x1b[32mDay ${i}\x1b[0m`);
    journalAdd();
  }
  if (newDay === false) {
    i--;
  }
}

const foundCause = (() => {
  // Isolates the days user turned to pinpoint cause
  const daysTurned = journal.filter((object) => object.reacted === 'Reacted? Yes');

  const events = [], eventsComb = [];
  let occurences = [], prevEvent;

  daysTurned.map((day) => {
    // Pools user's events on days user turned
    events.push(...day.events);
  });

  events.sort();
  for (let i = 0; i < events.length; i++) {
    // Finds how often all events occur and stores information
    if (events[i] !== prevEvent) {
      eventsComb.push(events[i]);
      occurences.push(1);
    } else { occurences[occurences.length - 1]++ }
    prevEvent = events[i];
  }

  let max = Math.max(...occurences);

  let indexArr = [];

  const allEqual = arr => arr.every(v => v === arr[0]);

  if (!allEqual(occurences)) {
    occurences.reduce((Arr, occurence, index) => {
      // Finds most occuring event for all days user turns
      if (occurence === max) {
        indexArr.push(index);
        return Arr;
      }
    }, []);
  }

  const causes = [];

  indexArr.map((index) => causes.push(eventsComb[index]));

  console.log('\n\n\x1b[93mHere\'s your log for the past week:\x1b[0m\n\n');

  console.table(journal);

  if (causes.length > 0) {
    console.log(`\n\x1b[95mThe fact that you ${[...causes]} seems to be what makes you react\n`);
  } else {
    console.log('\n\x1b[95mThe data given is not sufficient to draw conclusions. Please log again. 14 days minimum is highly reccomended.\n')
  }
  return causes;
})()

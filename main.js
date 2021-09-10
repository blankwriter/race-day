let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly  = false;
let age = 119;
//creating a control flow and giving the race number a value
if( age > 18 && registeredEarly === true) {
  raceNumber += 1000;
};
//creating a control flow if age is greater than 18 and regiatered early
if(age > 18 && registeredEarly === true) {
  console.log(`Your race time is 9:30am and your race number is: ${raceNumber}`);
}
//creating a control flow if age is greater than 18 and not regiatered early
else if (age > 18 && !registeredEarly)
{
  console.log(`Your race time is 11:00am and your race number is: ${raceNumber}`);
}
//creating a control flow if age is less than 18
else if (age < 18) {
  console.log(`Your race time is 12:30pm and your race number is: ${raceNumber}`);
}
else {
  console.log('KINDLY go to the registration desk.')
}

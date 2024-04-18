  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for(let num of nums) {
  results.push(num * 2);
}

console.log(results);



// Using map()
const multByTwo = function (num) {
  return num * 2;
}
//1st
 const mapresult = nums.map(multByTwo);

 console.log(mapresult);


 // self try //
const akram = function (momen) {
  return momen * 2;
}
 const ako = nums.map(akram);

 console.log(ako);

// Simplified w/ map()

const me = nums.map(function (momen){ return momen * 3});

console.log(me);

// Simplfied w/ map() + arrow function

const arrow = nums.map(momen => momen * 5 );
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


const studentswithIds = students.map( momen => [momen.name, momen.id]);

console.log(studentswithIds)

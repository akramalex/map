let number = [9, 12, 18, 24, 36];

const akram = function (nub) {

    return nub / 3;

}

// function (should be the one return)
const ako = number.map(akram);

console.log(ako)

// simple one //

const me =number.map(function (newone){ return newone * 3});

console.log(me);


// another try//

const you = number.map(function(lala) { return lala /4});
console.log(you);

const de = you.map(function(its){ return its * 10});
console.log(de);


// arrow easy way one line //

const arrow = de.map(c => c * 10);
console.log(arrow);

const arrow2 = arrow.map( me => me / 5);
console.log(arrow2);

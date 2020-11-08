// Some little test here and there

const Mario = "Mario";

//console.log("Name : " + name);

const greet = (name) => {
  console.log(`Hellow , ${name}`); 
};

greet("Anayaro");
greet("Wearden");
greet(Mario);



// Real test of template Strings (Littéraux de gabarits)

let rep = 31;
console.log(`La réponse est ${rep}`); // Gabarit simple avec la concaténation par défaut

function concatenationAdHoc(chaines, reponse) {
  let parite;
  if (reponse % 2 === 0) {
    parite = "paire";
  } else {
    parite = "impaire";
  }
  return `${chaines[0]} ${reponse} ${chaines[1]}${parite}`;
}
// concaténation spécifique où on modifie la sortie
console.log(concatenationAdHoc`La parité de  ${rep} est : `);

//Multiline String
console.log(`This is the first line
This is the second line`);

// breaking the string in several places  with typical string 
let a = 5;
let b = 10;
console.log('The sum of ' + a + ' and ' + b + ' is ' + (a + b));


// Not breaking the strng with Template Literals  (Expression Interpolation)
let c = 15;
let d = 20;
console.log(`The sum of ${c} and ${d} is ${c+d}\n`);

console.log("First Way : \n");

let info = `Name:   John Doe
Age:    20
City:   London`;

console.log(info);


console.log("\nSecond Way :\n");

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  city: 'London'
}

let info2 = `Name:   ${person.firstName} ${person.lastName}
Age:    ${person.age}
City:   ${person.city}`;

console.log(info2+'\n');



function exampleTag(personExp, strings, marksExp) {
  let resultStr;

  if (marksExp >= 50) {
      resultStr = 'passed';
  } else {
      resultStr = 'failed'
  }
  return `${personExp} ${strings} ${resultStr}`;
}


let p1 = {
  person: 'John',
  marks: 45
}

let p2 = {
  person: 'Ann',
  marks: 67
}

let ex1 = exampleTag`${p1.person} had ${p1.marks} `;
let ex2 = exampleTag`${p2.person} had ${p2.marks} `;

console.log(ex1);
console.log(ex2);


const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript',
      salary:2000
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML',
      salary: 1500
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS',
      salary: 2400
    },
  ];

  const me = students.map( akram => [akram.id, akram.skill, akram.salary]);
  console.log(me)
  console.log(students)

  const so = students.map(dor => [dor.salary]);

  console.log(so);


  

  
  let abso = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const [, , , fran] = abso.map(item => [item.name, item.teacher]);
console.log(fran);

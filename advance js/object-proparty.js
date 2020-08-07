const student = [
    {name: 'asad', id: 21},
    {name: 'santo', id: 25},
    {name: 'borsha', id: 28},
    {name: 'borsha rani', id: 30}
];

const names = student.map( s=> s.name );
const id = student.map(s => s.id);
console.log(names, id);

const biggerStudent = student.filter( s=> s.id>25);
const biggerStudentFind = student.find( s=> s.id>25);
console.log(biggerStudent);
console.log(biggerStudentFind);
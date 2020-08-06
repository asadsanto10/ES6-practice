class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'kasimpur';
    }
}
const student1 = new Student(12, 'santo');
const student2 = new Student(22, 'asad');
console.log(student1, student2);
console.log(student1.id, student2.name);
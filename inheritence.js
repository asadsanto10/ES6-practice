class Parent{
    constructor(){
        this.fatherName = 'mofidul';
    }
}

class Child extends Parent{
    constructor (name){
        super();
        this.name = name;
    }
}
const baby = new Child('santo');
const baby2 = new Child('santoooo');
console.log(baby);
console.log(baby2);
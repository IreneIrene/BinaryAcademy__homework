/* По видео мне было не совсем понятно, как сделать наследование
через конструкцию Object.create(), поэтому делала так, как написано на MDN:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
Global_Objects/Object/create#Example.3A_Classical_inheritance_with_Object.create()
*/
function Man(name, age){
    this.name = name;
    this.age = age;
}

Man.prototype.live = function() {
    console.log("I'm alive!");
};

function Student(name, age) {
    Man.call(this, name, age);
}

//inherit with Object.create
Student.prototype = Object.create(Man.prototype);
// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    console.log("I love studying!");
};

//create a "duckType" function
var duckType = function() {
    if('name' && 'age' && 'live' && 'study' in this) {
        return "Student";
    } else if('name' && 'age' && 'live' in this) {
        return "Man";
    } else {
        return "I don't know the type of this object";
    }
};

// Example usage:
var alex = new Man("Alex",15);
alex.live();// "I'm alive!"
var irene = new Student("Irene", 21);
irene.live();//"I'm alive!"
irene.study();//"I love studying!"

// Check that duckType works correctly
console.log(duckType.call(alex));//"Man"
console.log(duckType.apply(irene));//"Student"
console.log(duckType.bind(irene)());//"Student"


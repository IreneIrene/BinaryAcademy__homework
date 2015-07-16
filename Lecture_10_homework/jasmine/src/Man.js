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

Student.prototype = new Man();
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    console.log("I love studying!");
};


function Professor(name, age, iq) {
    Man.call(this, name, age);
    this.iq = iq;
}

Professor.prototype = new Man();
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function(subject) {
    if (subject === undefined) {
        throw new Error("subject is not defined");
    } else if (typeof subject !== 'string') {
        throw new Error("subject should be a string");
    }else {
        console.log(this.name + " is teaching " + subject);
    }
};

Professor.prototype.putGrade = function(grade){
    if (grade === undefined) {
        throw new Error("grade is not defined");
    } else if (typeof grade !== 'number') {
        throw new Error("grade should be a number");
    } else {
        console.log("I've put you " + grade);
    }
};



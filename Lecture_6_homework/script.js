var mvcPage = (function() {

    function Model(params) {
        this.name = params.name;
        this.age = params.age;
        this.year = params.year;
        this.examsTaken = params.examsTaken;
        this.takeExam = params.takeExam;
    }

    function Controller(params) {
        this.model = params.model;
        this.elementId = params.elementId;
        this.render = params.render;
        this.clickHandlers = params.clickHandlers;
        this.updateExams = params.updateExams;
    }

    Controller.prototype.renderView = function() {
        document.getElementById(this.elementId).innerHTML = this.render();
    };

    Controller.prototype.addEventHandlers = function() {
        document.getElementById('student-exams-button').addEventListener('click', this.updateExams.bind(this), true);
    };

    Controller.prototype.watchModel = function() {
        window.setInterval(function() {
            if (this.model.changed) {
                this.render();
                this.model.changed = false;
                console.log(this.model.changed);// false
                console.log(this.model.examsTaken);// outputs increased examsTaken
            }
        }.bind(this), 100);
    };

    var Student = new Model({
        name: 'Piotr',
        age: 22,
        year: 5,
        examsTaken: 2,
        takeExam: function() {
            this.examsTaken++;
            this.changed = true;
        }
    });

    var StudentController = new Controller({
        model: Student,
        elementId: 'student-container',
        render: function() {
            return '<span>' + this.model.name + '</span><button id="student-exams-button">Increase exams taken</button>';
        },
        clickHandlers: {
            '#student-exams-button': 'updateExams'
        },
        updateExams: function() {
            this.model.takeExam();
        }
    });

    return {
        initialize: function() {
            StudentController.renderView();
            StudentController.addEventHandlers();
            StudentController.watchModel();
        }
    };
});


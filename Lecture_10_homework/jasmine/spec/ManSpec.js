describe('Man', function() {
    var man;
    var manName = "Alex";
    var manAge = 27;

    beforeEach(function() {
        man = new Man(manName, manAge);
    });

    it('should have the name property with a specific value', function() {
        expect(man.name).toEqual(manName);
    });

    it('should have the age property with a specific value', function() {
        expect(man.age).toEqual(manAge);
    });

    describe('#live', function() {
        it('should write into the browser console', function() {
            console.log = jasmine.createSpy('log');
            man.live();
            expect(console.log).toHaveBeenCalled();
        });
    });

    describe('Student', function() {
        var student;
        var studentName = "Irene";
        var studentAge = 22;

        beforeEach(function() {
            student = new Student(studentName, studentAge);
        });

        it('should inherit properties from Man', function() {
            expect(student).toEqual(jasmine.objectContaining({
                name: studentName,
                age: studentAge
            }));
        });

        it('should inherit methods from Man', function() {
            spyOn(student, 'live');
            student.live();
            expect(student.live).toHaveBeenCalled();
        });

        describe('#study', function() {
            it('should write into the browser console', function() {
                console.log = jasmine.createSpy('log');
                student.study();
                expect(console.log).toHaveBeenCalled();
            })
        });
    });

    describe('Professor', function() {
        var professor;
        var professorName = "John";
        var professorAge = 45;
        var professorIQ = 130;

        beforeEach(function() {
            professor = new Professor(professorName, professorAge, professorIQ);
        });

        it('should inherit properties from Man', function() {
            expect(professor).toEqual(jasmine.objectContaining({
                name: professorName,
                age: professorAge
            }));
        });

        it('should have the iq property with a specific value', function() {
            expect(professor.iq).toEqual(professorIQ);
        });

        it('should inherit methods from Man', function() {
            spyOn(professor, 'live');
            professor.live();
            expect(professor.live).toHaveBeenCalled();
        });

        describe('#teach', function() {
            it('should write into the browser console when called with a string', function() {
                var subject = "Maths";
                console.log = jasmine.createSpy('log');

                professor.teach(subject);
                expect(console.log).toHaveBeenCalled();
            });

            it('should throw an exception when called with undefined', function() {
                expect(function() {
                    professor.teach(undefined);
                }).toThrowError('subject is not defined');
            });

            it('should throw an exception when called with not a string', function() {
                expect(function() {
                    professor.teach(5);
                }).toThrowError('subject should be a string');
            });
        });

        describe('#putGrade', function() {
            it('should write into the browser console when called with a number', function(){
                var grade = 12;
                console.log = jasmine.createSpy('log');

                professor.putGrade(grade);
                expect(console.log).toHaveBeenCalled();
            });

            it('should throw an exception when called with undefined', function() {
                expect(function() {
                    professor.putGrade(undefined);
                }).toThrowError('grade is not defined');
            });

            it('should throw an exception when called with not a number', function() {
                expect(function() {
                    professor.putGrade('blahblah');
                }).toThrowError('grade should be a number');
            });
        });

    });
});

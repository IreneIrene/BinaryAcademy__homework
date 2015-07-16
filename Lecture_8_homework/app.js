(function() {
    var app = angular.module('myApp',[]);

    app.controller('GoodsCtrl', function() {
        this.goods = [];
        this.number = 0;
        this.showList = true;

        this.setName = function() {
            var names = ['apples', 'bananas', 'bread', 'milk', 'oranges', 'peaches'];

            return names[Math.floor(Math.random()*names.length)];
        };

        this.setPrice = function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        this.addProduct = function() {
            var productName = this.setName();
            var productPrice = this.setPrice(1,10);

            this.goods.push({name: productName, price: productPrice });
            this.number = this.goods.length;
        };

        this.toggleList = function(){
            this.showList = !this.showList ? true : false;
        };

    });

    app.controller('PeopleCtrl', function() {
        this.people = [];
        this.number = 0;
        this.showList = true;

        this.setName = function(){
            var names = ['Alex', 'Jack', 'John', 'Ann', 'Peter', 'Irene'];

            return names[Math.floor(Math.random()*names.length)];
        };

        this.setBirthplace = function() {
            var cities = ['Kyiv','London','Madrid', 'Paris', 'Rome', 'Bern'];

            return cities[Math.floor(Math.random()*cities.length)];
        };

        this.setAge = function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        this.setAvatar = function() {
            var avatars = [
                {src: 'images/avatar1.jpg'},
                {src: 'images/avatar2.jpg'},
                {src: 'images/avatar3.jpg'},
                {src: 'images/avatar4.jpg'},
                {src: 'images/avatar5.jpg'},
                {src: 'images/avatar6.jpg'}
            ];

            return avatars[Math.floor(Math.random()*avatars.length)];
        };

        this.addPerson = function() {
            var personName = this.setName();
            var personBirthplace = this.setBirthplace();
            var personAge = this.setAge(18,50);
            var personAvatar = this.setAvatar();

            this.people.push({name: personName, birthplace: personBirthplace, age: personAge, avatar: personAvatar });
            this.number = this.people.length;
        };

        this.removePerson = function(personToRemove) {
            var index = this.people.indexOf(personToRemove);

            this.people.splice(index,1);

            if(this.number > 0) {
                this.number--;
            }
        };

        this.toggleList = function() {
            this.showList = !this.showList ? true : false;
        };

    });

})();
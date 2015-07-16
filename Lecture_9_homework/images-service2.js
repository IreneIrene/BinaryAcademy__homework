(function() {

    angular
        .module('myApp')
        .factory('imagesService', imagesService);


    imagesService.$inject = ['$http', 'logger'];

    function imagesService($http, logger){
        var service = {
            getImages: getImages
        };
        return service;

        function getImages() {
            return $http.get('http://jsonplaceholder.typicode.com/photos')
                .then(getImagesComplete)
                .catch(getImagesFailed);

            function getImagesComplete(response) {
                return response.data;
            }

            function getImagesFailed(error) {
                logger.error('XHR Failed for getImages.' + error.data);
            }
        }
    }

})();

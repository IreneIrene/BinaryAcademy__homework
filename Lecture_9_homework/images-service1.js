(function() {

    angular
        .module('myApp')
        .factory('imagesService', imagesService);

    imagesService.$inject = ['$resource','$q', 'logger'];

    function imagesService($resource, $q, logger){
        var service = {
            getImages: getImages
        };
        return service;

        function getImages() {
            var deferredObject = $q.defer();

            $resource('http://jsonplaceholder.typicode.com/photos')
                .query()
                .$promise
                .then(getImagesComplete)
                .catch(getImagesFailed);


            function getImagesComplete(result) {
                deferredObject.resolve(result);
            }

            function getImagesFailed(error) {
                logger.error('XHR Failed for getImages.' + error.data);
            }

            return deferredObject.promise;

        }
    }

})();
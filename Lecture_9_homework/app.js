(function() {
    angular
        .module('myApp', ['ngResource'])
        .controller('Images', Images);

    // controller calling the imagesService factory
    Images.$inject = ['imagesService', 'logger'];

    function Images (imagesService, logger) {
        var vm = this;
        vm.images = [];

        activate();

        function activate() {
            return getImages().then(function() {
               logger.info('Activated Images View');
            });
        }

        function getImages() {
            return imagesService.getImages()
                .then(function (data) {
                    vm.images = data;
                    return vm.images;
                });
        }
    }

})();
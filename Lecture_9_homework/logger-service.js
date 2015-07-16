(function() {
    angular
        .module('myApp')
        .factory('logger', logger);

    function logger($log) {
        var service = {
            error: error,
            info: info
        };
        return service;

        function error(msg) {
            var loggedMsg = 'Error: ' + msg;
            $log.error(loggedMsg);
            return loggedMsg;
        }

        function info(msg) {
            var loggedMsg = 'Info: ' + msg;
            $log.info(loggedMsg);
            return loggedMsg;
        }
    }
})();
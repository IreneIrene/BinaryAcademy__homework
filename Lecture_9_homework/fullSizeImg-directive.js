(function() {

    angular
        .module('myApp')
        .directive('fullSizeImg', fullSizeImg);

    function fullSizeImg() {
        var directive = {
            restrict: 'A',
            scope: {
                url: '@'
            },
            link: link
        };
        return directive;

        function link(scope, element, attrs) {

            element.bind('click', function() {
                var overlay = document.createElement("div");
                overlay.setAttribute('class','overlay');
                overlay.innerHTML = '<img src="'+scope.url+'">';

                document.body.appendChild(overlay);

                overlay.onclick = function(evt){
                    document.body.removeChild(overlay);
                }
            });
        }
    }

})();

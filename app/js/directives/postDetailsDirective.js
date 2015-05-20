'use strict';

app.directive('postDetails', function() {
    return {
        restrict: 'A',
        templateUrl: 'partials/directives/post-details-directive.html',
        scope: {
            post: '=post'
        }
    }
});

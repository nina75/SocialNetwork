'use strict';

app.directive('commentDetails', function() {
    return {
        restrict: 'A',
        templateUrl: 'partials/directives/comment-details-directive.html',
        scope: {
            comment: '=comment'
        }
    }
});

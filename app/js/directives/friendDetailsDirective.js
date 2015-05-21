'use strict';

app.directive('friendDetails', function() {
    return {
        restrict: 'A',
        templateUrl: 'partials/directives/friend-details-directive.html',
        scope: {
            friend: '=friend'
        }
    }
});


'use strict';

app.filter('date' ,function(){
    return function(input){
        var dateString = '',
            year = input.substr(0, 4),
            month = input.substr(5, 2),
            day = input.substr(8, 2),
            hour = input.substr(11, 5);

        dateString = day + '.' + month + '.' + year + ' at ' + hour;

        return dateString;
    }
})
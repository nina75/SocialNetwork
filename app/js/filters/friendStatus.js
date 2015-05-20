'use strict';

app.filter('friendStatus' ,function(){
    return function(input){
        switch(input) {
            case true: return 'Friend';
            case false: return '';
        }
    }
})
'use strict';

app.filter('likeStatus' ,function(){
    return function(input){
        switch(input) {
            case true: return 'Unlike';
            case false: return 'Like';
        }
    }
})
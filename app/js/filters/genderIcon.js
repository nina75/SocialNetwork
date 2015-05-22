'use strict';

app.filter('genderIcon' ,function(){
    return function(input){
        switch(input) {
            case 0: return "img/male-sign-min.png";
            case 1: return "img/female-sign-min.png";
            case 2: return "img/other-sign-min.png";
        }
    }
})
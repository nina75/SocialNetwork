'use strict';

app.filter('genderIcon' ,function(){
    return function(input){
        switch(input) {
            case 0: return "img/female-sign-main.jpg";
            case 1: return "img/female-sign-main.jpg"
            case 2: return "img/female-sign-main.jpg";
        }
    }
})
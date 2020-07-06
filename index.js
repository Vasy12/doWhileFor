"use strict";

const number= Number( prompt('Введите число'));

let i = 0;

let factorial = 1;

while (i < number){

    i +=1;

    factorial *= i;
}

alert(factorial);
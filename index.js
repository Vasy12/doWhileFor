"use strict";

let number = 1000;
let extent = 0;
do{
    number /= 2;
    extent += 1;
} while (number > 50){
    alert(`Число после делений ${number}; На 2 делили ${extent} раз`)
}


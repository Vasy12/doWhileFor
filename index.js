"use strict";

const number= Number( prompt('Введите число'));

const extent = Number( prompt('Введите в какую степень ее возвести'));

let i = 0;

let result = 1;

if (extent >= 0) {

    while (i < extent) {
        i += 1;
        result  *= number  ;
    }

    alert(result);
} else {

    while (i > extent) {
        i -= 1;
        result  /= number  ;
    }
    alert(result);
}

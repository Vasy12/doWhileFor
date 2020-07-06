"use strict";

let input = Number( prompt('Введите число меньше нуля'));

if (input < 0) {
    let i = input;

    while (input < 0) {
        input += 1;
        i = (`${i} ${input}`);
    }

    alert(i);
} else {
    alert('Неверное число');
}

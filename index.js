"use strict";

const userNumber = Number(prompt('введите число'));

if (!isNaN(userNumber)){
    for (let i = 1; i < 100; i +=userNumber) {
        console.log ( i );
    }
}


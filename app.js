/*
    Enhanced Object Literals for methods
*/

'use strict';

const a = 1;
const b = {
    a,
    getA: function() {
        return this.a
    },
    getAnew() {
        return this.a
    }
}

console.log(b.getA());
console.log(b.getAnew());
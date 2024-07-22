/*
    Enhanced Object Literals for methods

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
*/

/*
    Call, apply
*/

'use strict';

const automobile = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    damages: [],
    addDamage(part, rate) {
        console.log(`on auto ${this.brand} ${this.model} ${this.year} added damage '${part}' with ${rate} damage rate`);
        this.damages.push({
            part,
            rate
        });
    }
}

let ford = Object.assign({}, automobile);
ford.addDamage('wheels', 2);
ford.addDamage('brakes', 3);
ford.addDamage('bumper', 4);

let toyota = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    damages: []
}
toyota.addDamage = automobile.addDamage;
toyota.addDamage('door', 3);
toyota.addDamage('engine', 5);

console.log(ford);
console.log(toyota);

const addDamageFunc = automobile.addDamage;
// addDamageFunc(); //error
addDamageFunc.call(ford, 'steering', 10);
addDamageFunc.call(toyota, 'chassis', 8);
addDamageFunc.apply(ford, ['lights', 7]);
addDamageFunc.apply(toyota, ['suspension', 2]);

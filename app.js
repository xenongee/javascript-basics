/* 
    Boolean logic
    Logical operators
*/

// A = true
// B = false

// A && B - AND
//      A    B
// A  true false
// B false false

// A || B - OR
//      A    B
// A  true true
// B true false

// ! - NOT
// !A - true -> false
// !B - false -> true

const isAdmin = false;
const canWrite = true;

console.log(`System file write access: ${isAdmin && canWrite}`); // false
console.log(`System file write access: ${isAdmin || canWrite}`); // true
console.log(`Inverse admin rights: ${!isAdmin}`); // true

const isEdited = true;
const owner = true;
console.log(`System file write/edit access: ${isAdmin && canWrite && (!isEdited || owner)}`); // false 

let a = 7;
if (a === -8 || a === 22) {
    console.log('a is -8 or 22');
}
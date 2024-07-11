/* 
    Strict mode
*/

'use strict';

let someVar = 100;

if (true) {
	someVare = 3; // error with strict mode, without it would have been ignored
}
console.log(someVar);


function a(b, b) { // error with strict mode, because: Duplicate parameter name not allowed in this context
	console.log(b);
}

a(1,1);
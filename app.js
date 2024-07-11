/* 
    Strict mode

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
*/

/*
    Пример scope chain
    Example of scope chain
*/

'use strict'

let successMsg = 'Success!';
const user = {
    name: 'John',
    roles: []
}

function addRole(user, role) {
    if (role === 'admin') {
        console.warn('Cannot add admin role');
        // console.log(a); // a is not defined (a in another scope)
        return user;
    }
    user.roles.push(role);
    // console.log(successMsg1); // successMsg1 is not defined
    let successMsg = 'Greatings!';
    console.log(successMsg);
    
    function logRoles() {
        const a = 3;
        console.log(user.roles);
    }
    
    logRoles()
    return user;
}

console.log(addRole(user, 'admin'));
console.log(addRole(user, 'redactor'));
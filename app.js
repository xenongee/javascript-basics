/*
    Объекты
    Objects

const userArr = ['John', 'Doe', 25, 'male'];
const user = {
    name: 'John',
    surname: 'Doe',
    age: 25,
    gender: 'male'
};

console.log(userArr); // ['John', 'Doe', 25, 'male']
console.log(user); // { name: 'John', surname: 'Doe', age: 25, gender: 'male' }

user['skills'] = ['html', 'css', 'js'];
user[1] = 'Hello';

console.log(user); // { name: 'John', surname: 'Doe', age: 25, gender: 'male', skills: [ 'html', 'css', 'js' ], 1: 'Hello' }
*/

/*
    Обращение к элементам
    Addressing elements

const user = {
    name: 'John',
    surname: 'Doe',
    age: 25,
    gender: 'male',
    eduBasic: 'School',
    eduAdvanced: 'University',
};

console.log(user.name, user.surname); // John Doe
console.log(user['name'], user['surname']); // John Doe
const eduType = 'Advanced';
console.log(user['edu' + eduType]); // University
*/

/*
    Методы объектов
    Methods of objects
const user = {
    name: 'John',
    surname: 'Doe',
    age: 25,
    gender: 'male',
    getFullNameNew: function() {
        console.log(this);
        return user.name + ' ' + this.surname;
    }
};

// function getFullName(user) {
//     return user.name + ' ' + user.surname;
// }

console.log(user.getFullNameNew());
*/  

/*
    Упражнение - кошелек
    Exercise - wallet
*/

const wallet = {
    balance: 0,
    operations: [],
    balanceIn: function(sum, reason) {
        this.balance += Number(sum);
        this.operations.push(`+${sum} - ${reason}`);
    },
    balanceOut: function(sum, reason) {
        if (this.balance < sum) {
            alert(`Недостаточно средств на счете: ${this.balance}`);
            return;
        }
        this.balance -= Number(sum);
        this.operations.push(`-${sum} - ${reason}`);
    },
    getOperationLength: function() {
        return `Всего операций: ${this.operations.length}`
    }
}

function init() {
    let sum = 0;
    let reason = '';
    let selectFunction = prompt(`Выберите действие:\n1 - вывести баланс\n2 - положить на счет\n3 - вывести из счета\n4 - сколько произведено операций\nЛюбой отличный знак - завершить программу`);
    
    switch (Number(selectFunction)) {
        case 1:
            alert(`Текущий баланс:\n${wallet.balance}`);
            init();
            break;
        case 2:
            sum = prompt(`Введите сумму:`);
            reason = prompt(`Введите сообщение:`);
            wallet.balanceIn(sum, reason);
            init();
            break;
        case 3:
            sum = prompt(`Введите сумму:`);
            reason = prompt(`Введите сообщение:`);
            wallet.balanceOut(sum, reason);2
            init();
            break;
        case 4:
            alert(wallet.getOperationLength());
            init();
            break;
        case 0:
        default:
            alert(`Завершение. Текущий баланс: ${wallet.balance}`);
            break;
    }

    console.log(wallet);
}

init();

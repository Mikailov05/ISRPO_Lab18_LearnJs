/*let value = 10;
console.log(value);
value = "Темпър это строка";
console.log(value);
value = true;
console.log(value);

let userName = "Алексей";
// шаблонная строка
console.log(`Привет, ${userName}!`);

// Number (Число)

// дробное число
let price = 99.99;
// отрицательное число
let temperature = -15;
// Infinity
let infinity = 1 / 0;
// NaN (Not a Number)
let notANumber = 0 / 0;
// 0.3000000000000004 (особенность JS)
console.log(0.1 + 0.2);

// BigInt (Большие целые числа)

//let bigNumber = 9007199254740991 n; // добавляем `n` в конце
let huge = BigInt("123456789012345678901234567890");

let isAlive = true;
let isWorking = false;
let isAdult = age >= 18; // результат сравнения

// Undefined (Не определено)

let x; // переменная объявлена, но не присвоено значение
let y = undefined; // явное присваивание

// Null (Пустое значение)

let userData = null;

let id = Symbol("id"); // создает уникальный идентификатор

// Object (Объект)

let person = {
    name: "Станислав",
    age: 30,
    isStudent: false,
    sayHello: function() {
        console.log("Привет!");
    }
};

console.log(person.name);

// Array (Массив)

let fruits = ["яблоко", "банан", "апельсин"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["текс", 42, true, null];

function sum(a, b) {
    return a + b;
}

let multiply = function(x, y) {
    return x * y;
};

console.log(sum(5, 3));

// Date (Дата)

let now = new Date();
let birthday = new Date("1995-12-17");

// 6.6. Арифметические операции

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Особенность JavaScript:

console.log(10 + "5"); // "105"
console.log("10" - 5); // 5

// ### Массивы:
const numbersArray = [1, 2, 3];
// Можно изменять элементы:
numbersArray[0] = 10;
console.log(numbersArray); // [10, 2, 3]
// Нельзя переназначить:
// numbersArray = [5, 6, 7]; // Ошибка!

// ### Объекты:
const persons = { name: "Denis", age: 18 };
// Можно изменять свойства:
persons.age = 50;
persons.city = "Volgograd";
console.log(persons); // { name: "Denis", age: 50, city: "Volgograd" }
// Нельзя переназначить:
// person = { name: "Stas" }; // Ошибка!

let age = 20;
let name = "Axmed"
let isStudent = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
*/

/*
let newPrice;
newPrice = 254;
console.log("Значение:", newPrice);
console.log("Тип:", typeof newPrice);

newPrice = "100 рублей";

// 5. Снова выведите значение и тип
console.log("Значение:", newPrice);
console.log("Тип:", typeof newPrice);
*/

/*
let num = 42;
let str = String(num);
let str2 = num.toString();
let str3 = "" + num;


let strNum = "123";
let int = Number(strNum);
let int2 = parseInt("42.5");
let float = parseFloat("3.14");
let int3 = "+99";

let bool1 = Boolean(1);
let bool2 = !!1;
let bool3 = Boolean(0);
let bool4 = Boolean("");

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);*/

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);


let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 == obj2);
console.log(obj1 === obj2);


let obj3 = obj1;
console.log(obj1 === obj3);



let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);

let x1 = 10;
let y1 = 2;


console.log(x1 + y1);
console.log(x1 - y1);
console.log(x1 * y1);
console.log(x1 / y1);

x1 = "10";

console.log(x1 + y1);
console.log(x1 - y1);
console.log(x1 * y1);
console.log(x1 / y1);
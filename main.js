
/* 
    При выполнении домашнего задания используйте только те конструкции,
    которые есть в уроке.

    TASK 0:

    Напишите функцию sum(c,t), которая возвращает результат суммы c,t

*/
function sum(c,t) {
    const result = c + t;
    return result;
}

const resultSum = sum(90, 11);
console.log(resultSum);
console.log('task 1');
/* 
    TASK 1:

    Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

*/

function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
const resultDifference = min(10, 15);
console.log(resultDifference);
console.log('task 2');

/* 
    TASK 2:

    Напишите функцию pow(x,n), которая возвращает x, в степени n

*/
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  const resultDegree = pow(3, 7);
  console.log(resultDegree);
  console.log('task 3');

/* 
    TASK 3:

    Напишите функцию, которая принимает число,
    и возвращает строку "четное" или "нечетное".

*/
function test(num) {
    if (num % 2 === 0) {
      return 'четное';
    } else {
      return 'нечетное';
    }
  }
  const resultTest = test(3);
  console.log(resultTest);
  console.log('task 4');
/* 
    TASK 4:

    Напишите функцию getColor(23, 100, 134), которая будет принимать три аргумента 
    и возвращать строку вида "rgb(23,100,134)". 
    Если какой-либо из аргументов не задан: например, третий:
    мы вызываем функцию getColor(23,100), в таком случае мы должны
    получить строку "rgb(23,100,0)"

*/

function getColor(num1, num2, num3) {
    if (num1 = 23, num2 = 100, num3 = 134) {
        return 'rgb(23,100,134)';
    } else (num1 = 23, num2 = 100, num3 = 0) => {
        getColor(num1, num2); {
            return 'rgb(23,100,0)';
        }
    }
}
const resultColor = getColor(23,100);
console.log(resultColor);
console.log('task 5');

/* 
    TASK 5:

    Напишите 2 функции:

    Первая функция squareNumber(num) должна принимать число, и возвращать квадрат этого числа

    Вторая функция запрашивает у пользователя число от 18 до 50.
    Если пользователь ввел НЕ число, то сделайте ему одно замечание,
    если число, то вызовете функцию squareNumber передав в нее это самое число.
    Необходимо вывести результат пользователю (Либо замечание, либо квадрат числа).  

*/

function squareNumber(num) {
    return num * num
  }
   
  console.log(squareNumber(5));
   
  function inputNumber() {
    const str = prompt('Введите число от 18 до 50')
    const num = Number(str)
    if(num >= 18 && num <= 50) {
      return squareNumber(num)
    }
    return 'Вы ввели не число'
  }
   
  console.log(inputNumber());


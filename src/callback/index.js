function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5, 5, sum));

setTimeout(() => {console.log('Hola. Esta es una prueba')}, 2000);

function mesage(name) {
  console.log(`Ha terminado el tiempo, ${name}`);
}

setTimeout(mesage, 2000, 'Kevin');
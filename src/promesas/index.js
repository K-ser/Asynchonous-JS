const promise = new Promise(function (resolve, reject){
  resolve('hey');
});

const cows = 5;

const verifyCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve('We have cows!!');
  } else {
    reject('There is no cows');
  }
});

verifyCows.then((result) => {
  console.log(result);
}) .catch((error) => {
  console.log(error);
}).finally(() => console.log('TERMINÓ LA PROMESA'));
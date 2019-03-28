// Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу 
// (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов. 
// Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.

function httpGet(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (this.status == 200) {
            resolve(this.response);
        } else {
          let error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
      xhr.send();
    });
}

function setpromiseArray(number) {
    let promiseArray = [];
    for (let i = 0; i < 10; i++) {
        promiseArray[i - 1] = httpGet('https://jsonplaceholder.typicode.com/users/' + i);
    }

    return promiseArray;
}

// for (let i = 0; i < 10; i++) {
//   promiseArray[i] = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       resolve('Всё успешно!')
//     }, 2000);
//   });
// }

Promise.all(promiseArray).then(result => {
  console.log(result)
})
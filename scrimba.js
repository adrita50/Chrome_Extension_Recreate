const welcomeEl = document.getElementById('welcome-el');

function greetUser(greeting, name) {
  welcomeEl.textContent = ` ${greeting} , ${name}`;
}

greetUser('hello', 'mettle');

function getFirst(arr) {
  return arr[2];
}

let num = getFirst([1, 2, 3, 4, 5]);
console.log(num);

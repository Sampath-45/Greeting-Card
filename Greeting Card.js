let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Sampath","to":"Sravya"}';

let parsedValue = JSON.parse(greeting);

let greetTextEl = document.getElementById("greetText");
let greetFromEl = document.getElementById("greetFrom");
let greetToEl = document.getElementById("greetTo");

greetTextEl.textContent = parsedValue.greetText;
greetFromEl.textContent = "From " + parsedValue.from;
greetToEl.textContent = "To " + parsedValue.to;
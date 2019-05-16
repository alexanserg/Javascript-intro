alert("This will affect the disposition of your soul!");

var name = prompt("What is your name?");

var food = prompt("what is your favorite food?")

var age = prompt("what is your age?")

var saySomething = function(whatNotToSay) {
  alert(whatNotToSay)
};

saySomething("My name is " + name + ", I am " +  age + " years old, and my favorite food is " + food + ".");


var add = function(first, second) {
  return first + second;
};

var subtract= function(first, second) {
  return first - second;
};

var divide = function(first, second) {
  return first / second;
};

var multiply = function(first, second) {
  return first * second;
};

var first = parseInt(prompt("pick a number"));

var second = parseInt(prompt("pick another number"));



alert(add(first, second));
alert(subtract(first, second));
alert(divide(first, second));
alert(multiply(first, second));

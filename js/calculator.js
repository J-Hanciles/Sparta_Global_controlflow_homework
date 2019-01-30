var value1 = null;
var choice = null;
var value2 = null;
var answer = null;
var newclose = null;

do {
  var value1 = parseFloat(prompt('enter first value'));
  var choice = prompt('Choose your action (a)dd  (s)ubtract (m)ultiply (d)ivide "add will be selected as default if no operator is chosen"')|| "a";
  var value2 = parseFloat(prompt('enter the second value'));


  switch (choice) {
  case "a":
  answer = value1 + value2
  alert(answer);
  break;
  case "s":
  answer = value1 - value2
  alert(answer);
  break;
  case "m":
  answer = value1 * value2
  alert(answer);
  break;
  case "d":
  answer = value1 / value2
  alert(answer);
  break;
  default:
    alert("Operation not valid")
  }

   newclose = prompt("Enter 'close' to exit")
} while ( newclose != "close");

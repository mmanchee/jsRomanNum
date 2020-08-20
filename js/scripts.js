function numerals(input) {
  
  const numerals = ["I", "X", "C", "M"];
  const numerals5 = ["V", "L", "D", "Z"];
  let numbers = input.split("").reverse();
  let output = "";

  for (let i = 0; i < numbers.length; i++) {
    output = "";
    let num = parseInt(numbers[i]);
    if (num < 4) {
      for (let e = 1; e <= num; e++) {
        output = output + numerals[i];
      }
    } else if (num === 4) {
      output = numerals[i] + numerals5[i];
    } else if (num < 9) {
      output = output + numerals5[i];
      num = num - 5; 
      for (let e = 1; e <= num; e++) {
        output = output + numerals[i];
      }
    } else {
      output = numerals[i] + numerals[i + 1];
    }  
    numbers[i] = output; 
  }
  numbers = numbers.reverse();
  let result = numbers.join("");

  return result;
}

$(document).ready(function() {
  $("#form-inputs1").submit(function(event) {
      event.preventDefault();
    let input = $("input#input1").val();
    let roman;

    if (isNaN(input)) {
      roman = "Please enter a number.";
    } else {
      roman = numerals(input);
    }
    
    $("#result1").text(roman);
  });
});
function numerals(input) {
  const numerals = ["I", "V", "X", "L", "C", "D", "M"];
  let numbers = input.split("").reverse();
  let output;

  for (const number of numbers) {
    
    if (number < 4) {
      for (let i = 0; i <= number; i++) {
        output += numerals[0];
      }
    } else if (number === 4) {
      output = numerals[0] + numerals[1];
    } else if (number < 9) {
      output = numerals[1]
      number -= 5;
      for (let i = 0; i <= number; i++) {
        output += numerals[0];
      }
    } else {
      output = numerals[0] + numerals[2];
    }  
    number = output;  
  }
  const result = numbers.reverse().join("");

  return result;
}

$(document).ready(function() {
  $("#form-inputs1").submit(function(event) {
      event.preventDefault();
    let input = parseInt($("input#input1").val());

    const roman = numerals(input);

    $("#result").text(roman);
  });
});
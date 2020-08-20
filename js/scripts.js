function numerals(input) {
  
  const numerals = ["I", "X", "C", "M"];
  const numerals5 = ["V", "L", "D", "Z"];
  let numbers = input.split("").reverse();
  let output = "";

  for (let i = 0; i < numbers.length; i++) {
    //alert(i);
    output = "";
    let num = parseInt(numbers[i]);
    if (num < 4) {
      for (let e = 1; e <= num; e++) {
        output = output + numerals[i];
      }
      //alert("1i " + numbers + " o= " + output);
    } else if (num === 4) {
      output = numerals[i] + numerals5[i];
      //alert("4i " + numbers + " o= " + output);
    } else if (num < 9) {
      output = output + numerals5[i];
      num = num - 5; 
      //alert("5+i " + numbers + " n= " + num + " r1= " + numerals[i] + " r2= " + numerals5[i]);
      for (let e = 1; e <= num; e++) {
        output = output + numerals[i];
      }
      //alert("5i " + numbers + " o= " + output);
    } else {
      output = numerals[i] + numerals[i + 1];
      //alert("9i " + numbers + " o= " + output);
    }  
    numbers[i] = output; 
  }
  //alert("out " + numbers); 
  numbers = numbers.reverse();
  //alert("r " + numbers);
  let result = numbers.join("");
  //alert("j " + numbers);

  return result;
}

$(document).ready(function() {
  $("#form-inputs1").submit(function(event) {
      event.preventDefault();
    let input = $("input#input1").val();
    const roman = numerals(input);
    //alert(roman);
    $("#result1").text(roman);
  });
});
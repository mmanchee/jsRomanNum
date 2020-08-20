function numerals(input) {
  
  const numerals = ["I", "V", "X", "L", "C", "D", "M"];
  let numbers = input.split("").reverse();
  let output = "";

  for (let i = 0; i < numbers.length; i++) {

    let num = parseInt(numbers[i]);
    if (num < 4) {
      //alert("in3");
      for (let i = 1; i <= num; i++) {
        output = output + numerals[0];
        //alert(output);
      }
    } else if (num === 4) {
      //alert("in4");
      output = numerals[0] + numerals[1];
      //alert(output);
    } else if (num < 9) {
      //alert("in5");
      output = output + numerals[1];
      num = num - 5;      
      //alert("o= " + output + " n= " + num);
      for (let i = 1; i <= num; i++) {
        output = output + numerals[0];
        
      }
      //alert(output);
    } else {
      //alert("in9");
      output = numerals[0] + numerals[2];
      //alert(output);
    }  
    //alert(output);
    numbers[i] = output; 
   // alert(numbers); 
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
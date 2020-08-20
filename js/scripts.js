$(document).ready(function() {
  $("#form-inputs1").submit(function(event) {
      event.preventDefault();
    let number = parseInt($("input#input1").val());
  });
});
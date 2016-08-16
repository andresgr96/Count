$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var firstNumber = parseInt($("input#first").val());
    var secondNumber = parseInt($("input#second").val());
    var total = 0;
    var output = [];


    for (var index = secondNumber; index <= firstNumber; index += secondNumber) {
    console.log(index);

      output.push(index);
      total += index;
    }

    alert(output);
    alert(total);


  });
});

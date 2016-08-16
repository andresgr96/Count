$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var firstNumber = parseInt($("input#first").val());
    var secondNumber = parseInt($("input#second").val());
    var total = 0;
    var output = [];

    if ( secondNumber > firstNumber) {
      alert("The second number cannot be greater than the first!")
    }
    else if ( !firstNumber || !secondNumber){
      alert("You have to input numbers!")
    }
    else if(firstNumber < 0 || secondNumber < 0){
      alert("Your numbers have to be positive!")
    }
    else {
      for (var index = secondNumber; index <= firstNumber; index += secondNumber) {
    console.log(index);

      output.push(index);
      total += index;
    }

    }

    alert(output);
    console.log(total);


  });
});

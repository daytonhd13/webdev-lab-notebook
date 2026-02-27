// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$(document).ready(function () {
  // Exercise #1: click event
  $("#copy").on("click", function (event) {
    console.log("click event", event);
    $("#output1").text($("#userInput1").val());
  });

  $("#userInput2").on("input", function (event) {
    console.log("input event", event);
    $("#output2").text($("#userInput2").val());
  });
});

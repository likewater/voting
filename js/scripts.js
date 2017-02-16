$(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age>=18){
    $('#votingguide').show();
  }
  else {
    $("#underage").show();
  }

});

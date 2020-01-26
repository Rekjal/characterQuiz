$(document).ready(function() {  
  $("#formOne").submit(function(event) {
   

  var eyeColor = $("input:radio[name=eye-color]:checked").val();
  var hairColor = $("input:radio[name=hair-color]:checked").val();
  var age = parseInt($("#age").val());

 // alert (age);

  if (eyeColor === 'Blue' && hairColor === 'Blonde' && age < 60){
    $('#result').text(`Brad Pitt`);
   // alert("In brad Pitt loop");
  } else {  
    $('#result').text(`Anyone but Brad Pitt`);
}



  // } else if (height < 46) {
  //     $('#not-tall-enough').addClass("backgroundColor");
  //   } else if (height > 46 && height < 58) {
  //     $('#not-tall-enough').addClass("backgroundColor");
  //     $('#mid-height').addClass("backgroundColor");
  //   } else if (height > 58) {
  //     $('#not-tall-enough').addClass("backgroundColor");
  //     $('#mid-height').addClass("backgroundColor");
  //     $('#tall').addClass("backgroundColor");
  //   }
  event.preventDefault();
});
  });
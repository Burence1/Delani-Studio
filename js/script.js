 $(document).ready(function() {
  $("#des").click(function() {
    $("#design").show();
    $("#des").hide();
  })});  
    $("#develop").click(function(){
    $("#dev").show();
    $("#develop").hide();
    });
  $("#product").click(function(){
    $("#manage").show();
    $("#product").hide();
  });

$(document).ready(function () {
  $("#design").click(function () {
    $("#design").hide();
    $("#des").show();
  })});
  $("#dev").click(function () {
    $("#dev").hide();
    $("#develop").show();
  });
  $("#manage").click(function () {
    $("#manage").hide();
    $("#product").show();
  });

$('#pic1').hover(function () {
  $(".gallery1",this).fadeToggle(1000);
});
$('#pic2').hover(function () {
  $(".gallery2", this).fadeToggle(1000);
});
$('#pic3').hover(function () {
  $(".gallery3", this).fadeToggle(1000);
});
$('#pic4').hover(function () {
  $(".gallery4", this).fadeToggle(1000);
});
$('#pic5').hover(function () {
  $(".gallery5", this).fadeToggle(1000);
});
$('#pic6').hover(function () {
  $(".gallery6", this).fadeToggle(1000);
});
$('#pic7').hover(function () {
  $(".gallery7", this).fadeToggle(1000);
});
$('#pic8').hover(function () {
  $(".gallery8", this).fadeToggle(1000);
});

//  function text() {
//   var text = document.getElementById("name").value;
//   alert( `${text} we have received your message. Thank you for reaching out to us`);
// }

$(document).ready(function () {
  //event.preventDefault();
  $("#submit").click(function () {
    var x = $("form").serializeArray();
    console.log(x);
    $.each(x, function (i, field) {
        console.log(x);
        $("#out").push(`${field.name}:${field.value} `);
        console.log(x);
        return false;
      });
  });
});

// function getFormObj(data) {
//   var formObj = {};
//   console.log(formObj)
//   var inputs = $(`#submit${data}`).serializeArray();
//   $.each(inputs, function (i, input) {
//     console.log(formObj)
//     formObj[input.name] = input.value;
//   });
//   return formObj;
// }
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
  })
});
$("#dev").click(function () {
  $("#dev").hide();
  $("#develop").show();
});
$("#manage").click(function () {
  $("#manage").hide();
  $("#product").show();
});
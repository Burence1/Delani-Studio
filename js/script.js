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

// $("#pic3").on(
//         {
//           mouseenter: function () {
            
//             $('#pic3').on('mouseenter', function () {
//               $('#mighty',this);
//             });
//           }
//           mouseleave: function () {
            
//             $('#pic3').on('mouseleave', function () {
//               $('#mighty').hide();
//             });
//           }
//         });

function text() {
  var text = document.getElementById("name").value;
  alert( `${text} we have received your message. Thank you for reaching out to us`);
}
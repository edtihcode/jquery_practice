$( document ).ready(function(){
  console.log("jQuery Works");
  $("#Test").css("color","red")
  $("h1").css("font-size","200pxs")
  $("body").css("background-color","green")

//when you run a test #text. run function
  $("#Test").click(function(){
    $("h1").css("color","white");
  });
// get current value of #header color
  var currentColor = $("header").css("color");
//if header color is black
  if (currentColor == "rgb(0, 0, 0)") {
    //make it gold
    $("#header").css("color","gold");
  }else {
    //..otherwise make it black again
    $("#header").css("color","rgb(0, 0, 0)");
  }


});

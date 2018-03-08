$( document ).ready(function(){
  console.log("jQuery Works");
  var box = $("#myBox");

  box.mouseover(function(){

    // console.log("over the box");
    // box.hide(4000);
  });

  $("#buttonColor").click( function () {
    box.show();
    console.log(giveMeARandomNumber(),giveMeARandomNumber());
    // 3 variation:

      colorString =


      // var colorString = "rgb("+ giveMeARandomNumber() + ", "+ giveMeARandomNumber() + ", " + giveMeARandomNumber()+")";
      // console.log(colorString);
      // box.css("background-color", colorString);

      // or
      //       box.css("background-color", "rgb("+ giveMeARandomNumber() + ", "+ giveMeARandomNumber() + ", " + giveMeARandomNumber()+")");
  // });
  $("#hide").click( function () {
    box.hide();


  });
var loopingColor = setinterval(function(){


          box.css("background-color", "rgb("+ giveMeARandomNumber() + ", "+ giveMeARandomNumber() + ", " + giveMeARandomNumber()+")");
  },1000);



});

function giveMeARandomNumber(){
  var number = Math.random()*255;
    number = Math.round(number);

  return number;
}

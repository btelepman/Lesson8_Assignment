//Program Name: Recipe Display Application 
//Author:Blair Telepman 
//Date: November 11, 2015
//Filename: script.js


function display(event){
  $(event.currentTarget).next().fadeIn("slow");
  $("h3").click(display);
}//end of display()

function display2(event) {
 $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
}
/*
$("h3").click(display2);
*/
$("h3").hover(display2);

$("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "pink");
});
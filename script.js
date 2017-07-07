$(document).ready(function(){
$("#alert").click(function(){
  var answer = $("input").val();
  if (answer === "King Henry VIII"){
    alert("Great Job");
  }else if (answer === "King Henry"){
    alert("Close");
  }else{
    alert("Try Again");
  }
});
$("#buttons").click(function(){
  for(var i=0; i<5; i=i+1){
  $("div").append('<img src="https://media1.giphy.com/media/xT8qBsOjMOcdeGJIU8/giphy.gif">') 
}
});
});

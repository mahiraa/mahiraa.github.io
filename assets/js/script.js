var mouseX;

$("#live-zone").mousemove( function(e) {
   mouseX = e.pageX; 
   mouseX = mouseX+"px";
   $("#x-pos").html("").append(mouseX);
   $("#div-one").css("width",mouseX); 
});  
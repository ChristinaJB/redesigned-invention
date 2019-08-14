// Add the time to the html so that the user doesn't have to wait for te time to start in order to seee the time.
var d = new Date();
var t = d.toLocaleTimeString();
document.getElementById("demo").innerHTML = t;

// Setting the myTimer function to display every second with setInterval and 1000 (milliseconds) and placing them in a symbol myVar.
// var myVar = setInterval(myTimer, 1000);
// // Creating the myTimer function. 
function myTimer() {
// // new Date function will diplay the time. Placed the new Date function inside the symbol d.
  var d = new Date();
// //  localeTimeString function keeps the time in symbold d updated. Placing inside symbol t.
  var t = d.toLocaleTimeString();
// Adding functions to my documenet through id demo and symbol t.
  document.getElementById("demo").innerHTML = t;
}


// Made an array complete with all the colors I need to go through.
var color = ["#4FC3F7", 
"#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD","#01579B", "#9575CD", "#7E57C2", "#673AB7", 
"#5E35B1", "#512DA8", "#4527A0", "#311B92", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB"
];



var x = document.body.style;

x.backgroundColor = color[0];

var i = 0;

  function change() {
    x.backgroundColor = color[i];
    i = (i + 1) % color.length;
  
  }


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
drawClock();
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawTime(ctx, radius);
  change();
  myTimer();
}


  function drawFace(ctx, radius) {


  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);

  ctx.fillStyle = x.backgroundColor = color[i];
  ctx.fill();


  ctx.strokeStyle = "white";
  
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
    
}

function drawTime(ctx, radius){

  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  ctx.strokeStyle = 'green';
  //hour
  hour=hour%12;
  hour=(hour*Math.PI/6)+
  (minute*Math.PI/(6*60))+
  (second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.8, radius*0.06);
  //minute
  minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
  ctx.strokeStyle = 'black';
  drawHand(ctx, minute, radius*0.8, radius*0.05);
  // second
  second=(second*Math.PI/30);
  ctx.strokeStyle = 'red';
  drawHand(ctx, second, radius*0.8, radius*0.02);

}



function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "square";  
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
  









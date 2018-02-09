//Javascript for drawing and calculating quadratics 2017
var a, b, c, context, w, h, k=18;

function init() {
  canvas= document.getElementById("mycanvas");
  context = canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context',w);
  graphpaper();
}  // close init

function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  x1=(-b+Math.sqrt(b**2-4*a*c))/(2*a)
  x1=Math.round(x1 * 100) / 100;
  x2=(-b-Math.sqrt(b**2-4*a*c))/(2*a)
  x2=Math.round(x2 * 100) / 100;

  $("#solution1").text("X intercept is at "+x1);
  $("#solution2").text("X intercept is at "+x2);
  console.log(a,b,c);
  graphQuad();
  results();
  context.beginPath();
  context.arc(w/2+x1*k, h/2, 5, 0, 6.28);
  context.fill(); 
  context.beginPath();
  context.arc(w/2+x2*k, h/2, 5, 0, 6.28);
  context.fill(); 
}  // close QF

function results() {
  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vY = a*Math.pow(vX,2)+b*vX+c*1;
  vX=vX.toFixed(2);
  vY=vY.toFixed(2);
  cp = 2*vX;
  $("#vertex").text("Vertex is at (" + vX+","+vY+")");
  context.fillStyle ="darkblue";
  context.beginPath();
  context.arc(w/2+vX*k, h/2-vY*k, 5, 0, 6.28);
  context.fill();
  $("#y-int").text("Y intercept is at (0,"+ c+")");
  context.fillStyle = "darkblue";
  context.beginPath();
  context.arc(w/2, h/2-c*k, 5, 0, 6.28);
  context.fill(); 
  $("#corres-point").text("Corresponding point is at ("+cp+","+c+")");
  context.beginPath();
  context.arc(w/2+cp*k, h/2-c*k, 5, 0, 6.28);
  context.fill();
  $("#sim-line").text("Symmetry line is at x= "+vX+""); 
  context.strokeStyle="rgba(0,50,300,1)";
  context.lineWidth = "1";
  context.setLineDash ([8,4]);
  context.beginPath();
  context.moveTo(w/2+vX*k, 5);
  context.lineTo(w/2+vX*k, h+5);
  context.stroke();
  context.setLineDash([0]);
   //$("#corres.point").text("Corresponding point is at ("+vX*2)")";
}  // close results()


function graphpaper() {
  // the x and y axis drawn
  context.lineWidth = 5 
  context.beginPath();
  context.moveTo(w/2, 0);
  context.lineTo(w/2, h);
  context.stroke();

  context.beginPath();
  context.moveTo(0, h/2);
  context.lineTo(w, h/2);
  context.stroke(); 

 // thin line with a 50% opacity using rgba() 
 context.lineWidth=1;
 context.strokeStyle="rgba(0,0,255,.5)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<h/(2*k); i++) {
    context.beginPath();
    context.moveTo( 0, h/2-i*k );
    context.lineTo( w, h/2-i*k );
    context.stroke();

    context.beginPath();
    context.moveTo( 0, h/2+i*k );
    context.lineTo( w, h/2+i*k );
    context.stroke();

  }  
   // thin line with a 50% opacity using rgba() 
   context.lineWidth=1;
   context.strokeStyle="rgba(0,0,255,.5)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<w/(2*k); i++) {
    context.beginPath();
    context.moveTo(w/2-i*k, 0);
    context.lineTo(w/2-i*k, h);
    context.stroke();

    context.beginPath();
    context.moveTo(w/2+i*k, 0);
    context.lineTo(w/2+i*k, h);
    context.stroke();

  }  
}
function graphQuad () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    y = c*1+b*x+a*Math.pow(x,2);
    nx =  (w/2-(i+1))/k;
    ny =  c*1+b*nx+a*Math.pow(nx,2);
    //console.log(x,y,nx,ny);
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "Red";
    context.moveTo(w/2+x*k,h/2-y*k);
    context.lineTo(w/2+nx*k,h/2-ny*k);
    context.stroke();
  }
}

function zoom (){
  k=k+2;
  init();
  graphQuad();
  results();
  QF();
}

function zoomOut (){
  k=k-2;
  init();
  graphQuad();
  results();
  QF();
}

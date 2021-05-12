var suggestion;
var xoff = 0;
var xoff2 = 50000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  var url = 'https://www.boredapi.com/api/activity';
  loadJSON(url,gotData);
  colorMode(HSB);
}

function change(data){
  var url = 'https://www.boredapi.com/api/activity';
  loadJSON(url,gotData);
}

function gotData(data){
suggestion = data;
}

function draw() {

  // BACKGROUND

  var coly = map(height,0,height,0,360);

  xoff += 0.001;
  xoff2 += 0.001;
  background(noise(xoff)*coly,100,75,0.01);

  // ELLIPSE

  var timeH = hour();
  var timeS = second();
  var wide = map(timeH,0,24,10,200);
  var cx = map(noise(xoff),0,1,0,width);
  var cy = map(noise(xoff2),0,1,0,height);

  ellipse(cx,cy,wide,wide);



  // SUGGESTION
  
  if (suggestion){
    fill(100);
    textSize(30);
    textAlign(CENTER);
    stroke(0);
    text(suggestion.activity,width/2,height/2); 
  }

  if (timeS==59){
change();
  }

  //text(minute()+':'+second(),100,100);

  // BACKGROUND POINTS

  var pointamount = map(timeS,0,59,0,width);

  for (a = 0; a < pointamount; a+= 25){
    for (b = 0; b < height; b+= timeS){
      

      stroke(100);
      strokeWeight(2);
      point(a,b);
      

    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

var drops = [];

function setup() {
  createCanvas(innerWidth,innerHeight);
    for(var i=0;i<150;i++)
    {
        drops.push(new Drops());
    }
  

}

function draw() {
  if(Math.random()>0.4)
  background(0,100);  
  for(var i=0;i<drops.length;i++)
  {
      drops[i].draw();
      drops[i].update();
  }
  

  

}
var ballSprite,ballBody,ground
var rect1,rect2,rect3
var rect1Sprite,rect2Sprite,rect3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	rect1Sprite=createSprite(700,650,200,20);
	rect1Sprite.shapeColor="red";
	rect2Sprite=createSprite(790,620,20,100)
	rect2Sprite.shapeColor="red";
	rect3Sprite=createSprite(590,620,20,100)
	rect3Sprite.shapeColor="red"
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
    world = engine.world;
	
	ballBody = Bodies.circle(10 , 100 , 25 , {'restitution':0.3, 'friction':0.5 , 'density':0.5, isStatic:false});
    World.add(world,ballBody);

	rect1= Bodies.rectangle(700,650,200,20,{'friction':0.5 , isStatic:true});
	World.add(world, rect1);
	rect2= Bodies.rectangle(790,620,20,100,{'friction':0.5 , isStatic:true});
	World.add(world, rect2);

	rect3= Bodies.rectangle(590,620,20,100,{'friction':0.5 , isStatic:true});
	World.add(world, rect3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10, {isStatic:true, 'friction':2} );
	 World.add(world, ground);

	Engine.run(engine);

	keyPressed()
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode=CENTER
  ellipse(ballBody.position.x,ballBody.position.y,25)

  drawSprites();
}

function keyPressed(){
	if (keyCode ===UP_ARROW) {
		Matter.Body.applyForce(ballBody,ballBody.position,{x:30,y:-30});
	}
}	
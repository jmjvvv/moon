var img;

function setup() {
    createCanvas(1300, 1000);
    img=loadImage("a.png");
}


function draw() {
	background(0);
    fill(255,0,0);
    noStroke();
    ellipse(600,400,200,200);

   var duration0 = 3000;
   var duration1 = 5000;							// 속도1
   var duration2 = 8000;
   var duration3 = 5000;
   var timing0 = (new Date()%duration0)/duration1;
   var timing1 = (new Date()%duration1)/duration1; 	// 속도1
   var timing2 = (new Date()%duration2)/duration2;
   var timing3 = (new Date()%duration3)/duration3;

   fill(0); //우주선
   ellipse(600 + Math.cos(timing1*2*PI)*500,           // x좌표
        400 + Math.sin(timing1*2*PI)*0, // y좌표
        50,                                  // width
        50);                                 // height



   fill(0,90,255); //블루
   ellipse(600 + Math.cos(timing1*2*PI)*200,           // x좌표
        400 + Math.sin(timing1*2*PI)*200, // y좌표
        50,                                  // width
        50);                                 // height


   fill(60,255,0); //그린
   ellipse(600 + Math.cos(timing2*2*PI)*300,           // x좌표
        400 + Math.sin(timing2*2*PI)*300, // y좌표
        80,                                  // width
        80);                                 // height

   fill(255,228,0); //옐로
   ellipse(600 + Math.cos(timing1*2*PI)*200 + Math.cos(timing3*4*PI)*50,           // x좌표
        400 + Math.sin(timing1*2*PI)*200 + Math.sin(timing3*4*PI)*50, // y좌표
        20,                                  // width
        20);                                 // height

image(img,600 + Math.cos(timing1*2*PI)*200,          
        400 + Math.sin(timing1*2*PI)*0);
}
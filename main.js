var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_1_width=70;
car_1_height=50;
car_1_x=10;
car_1_y=10;
car_1_image="car_1.png";




background_image="background.jpg";


function add() {
  background_imgTag=new Image();
  background_imgTag.onload=uploadBackground;
  background_imgTag.src=background_image;

  car_1_imgTag=new Image();
  car_1_imgTag.onload=uploadCar_1;
  car_1_imgTag.src=car_1_image;

  
}

function uploadBackground() {
 ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar_1() {
 ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}

 
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38')
    {
      car_1_up();
      console.log("up");
    }

    if (keyPressed=='40')
    {
      car_1_down();
      console.log("down");
    }

    if (keyPressed=='37')
    {
      car_1_left();
      console.log("left");
    }

    if (keyPressed=='39')
    {
      car_1_right();
      console.log("right");
    }

}


function car_1_up() 
{
if (car_1_y>=0)
 {
   car_1_y=car_1_y-10;
   console.log("When up arrow is pressed, x = " + car_1_x + " | y = " +car_1_y);
   uploadBackground();
   uploadCar_1();
 }  
}

function car_1_down() 
{
if (car_1_y<=500)
 {
  car_1_y=car_1_y+10;
   console.log("When down arrow is pressed, x = " + car_1_x + " | y = " +car_1_y);
   uploadBackground();
   uploadCar_1();
 }  
}

function car_1_left() 
{
if (car_1_x>=0)
 {
  car_1_x=car_1_x-10;
   console.log("When left arrow is pressed, x = " + car_1_x + " | y = " +car_1_y);
   uploadBackground();
   uploadCar_1();
 }  
}

function car_1_right() 
{
if (car_1_x<=700)
 {
  car_1_x=car_1_x+10;
   console.log("When right arrow is pressed, x = " + car_1_x + " | y = " +car_1_y);
   uploadBackground();
   uploadCar_1();
 }  
}

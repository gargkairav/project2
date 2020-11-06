canvas = document.getElementById('myCanvas')
ctx = canvas.getContext('2d');
background_image = "racing.jpg";
bugatti_width = 125;
bugatti_height = 75;
bugatti_image = "bugatti.jpg";
bugatti_x = 10;
bugatti_y = 10;
Car2_width = 125;
Car2_height = 75;
Car2_image = "mclaren.jpg";
Car2_x = 10;
Car2_y = 100;
function add() {
    background_imageTag =  new Image();
    background_imageTag.src = background_image;
    background_imageTag.onload = uploadBackground;  

    bugatti_imgTag = new Image(); //defining a variable with a new image
	bugatti_imgTag.src = bugatti_image;   // load image
	bugatti_imgTag.onload = uploadbugatti; // setting a function, onloading this variable
}
    function uploadBackground(){
        ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
    }
    function uploadbugatti(){
        ctx.drawImage(bugatti_imgTag,bugatti_x,bugatti_y,bugatti_width,bugatti_height); 
        
      
        Car2_imgTag = new Image(); //defining a variable with a new image
        Car2_imgTag.src = Car2_image;   // load image
        Car2_imgTag.onload = uploadCar2; // setting a function, onloading this variable
    }       
        function uploadCar2(){
            ctx.drawImage(Car2_imgTag,Car2_x,Car2_y,Car2_width,Car2_height); 
     
        window.addEventListener("keydown" , my_keydown);
        function my_keydown(e)
        {
            keypressed = e.keyCode;
            console.log(keypressed)
            if(keypressed == '38')
            {

                up();
            console.log("up");
            }
            if(keypressed == '40')
            {

                down();
                console.log("down");
            }
            if(keypressed == '37')
            {

                left();
                console.log("left");
            }
            if(keypressed == '39')
            {

                right();
                console.log("right");
            }

        }

        window.addEventListener("keydown" , my_keydown);
        function my_keydown(e)
        {
            keypressed = e.keyCode;
            console.log(keypressed)
            if(keypressed == '87')
            {

                w();
            console.log("w");
            }
            if(keypressed == '65')
            {

                a();
                console.log("a");
            }
            if(keypressed == '83')
            {

                s();
                console.log("s");
            }
            if(keypressed == '68')
            {

                d();
                console.log("d");
            }

        }
        
        function up ()
        {
            if(bugatti_y >=0)
            {
                bugatti_y -= 10;
                console.log("When up arrow is pressed = " + bugatti_x + " - " + bugatti_y)
                uploadBackground();
                uploadbugatti(); 
            }   
        }
        function down ()
        {
            if(bugatti_y >=500)
            {
                bugatti_y -= 10;
                console.log("When down arrow is pressed = " + bugatti_x + " - " + bugatti_y)
                uploadBackground();
                uploadbugatti(); 
            }  
        }
        function left ()
        {
            if(bugatti_x>=0)
            {
                bugatti_x -= 10;
                console.log("When left arrow is pressed = " + bugatti_x + " - " + bugatti_y)
                uploadBackground();
                uploadbugatti(); 
            }   
        }
        function right ()
        {
            if(bugatti_x >=700)
            {
                bugatti_x -= 10;
                console.log("When right arrow is pressed = " + bugatti_x + " - " + bugatti_y)
                uploadBackground();
                uploadbugatti(); 
            }   
        }
        function w ()
        {
            if( Car2_y >=0)
            {
                Car2_y -= 10;
                console.log("When up arrow is pressed = " +  Car2_x + " - " +  Car2_y)
                uploadBackground();
                uploadCar2(); 
            }   
        }
        function s ()
        {
            if( Car2_y >=500)
            {
                Car2_y -= 10;
                console.log("When down arrow is pressed = " +  Car2_x + " - " +  Car2_y)
                uploadBackground();
                uploadCar2(); 
            }  
        }
        function a ()
        {
            if( Car2_x>=0)
            {
                Car2_x -= 10;
                console.log("When left arrow is pressed = " +  Car2_x + " - " +  Car2_y)
                uploadBackground();
                uploadCar2(); 
            }   
        }
        function d ()
        {
            if( Car2_x >=700)
            {
                Car2_x -= 10;
                console.log("When right arrow is pressed = " +  Car2_x + " - " +  Car2_y)
                uploadBackground();
                uploadCar2(); 
                
         
            }   
        }
    }
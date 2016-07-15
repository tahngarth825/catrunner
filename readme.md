Link: https://github.com/tahngarth825/tahngarth825.github.io

Notes to self:
1. Put trees in the middle lane of
  levels w/ grass so can't shoot up
2. Add: timer,

OPTIONAL:
1. Skateboard that you can jump onto to ride it down the row
1a. You can jump onto it perpendicularly, but if you let it run into you, you die.

### FOR MYSELF
Including image{
  let img = new Image();   // Create new img element
  img.addEventListener("load", function() {
    // execute drawImage statements here
    }, false);
    img.src = 'myImage.png'; // Set source path
}

drawImage(image, x, y){
  Draws the CanvasImageSource specified by the image parameter at the coordinates (x, y).
}

drawImage(image, x, y, width, height){
  This adds the width and height parameters, which indicate the size to which to scale the image when drawing it onto the canvas.
}

Example {
  let img = new Image,
    canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    src = "http://example.com/image"; // insert image url here

  img.crossOrigin = "Anonymous";

  img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage( img, 0, 0 );
      localStorage.setItem( "savedImageData", canvas.toDataURL("image/png") );
  }
  img.src = src;
  // make sure the load event fires for cached images too
  if ( img.complete || img.complete === undefined ) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
  }
}


TODO:
-[X] board.js - all three levels complete
-[X] car.js - Car spawns with random type in valid row
-[X] cat.js - should spawn fine and move
-[X] catRunner.js - sets up canvas context
-[ ] game.j - TODO: reset logic
-[ ] gameView.js - TODO: reset logic
-[X] movingObject.js

Add as necessary:
-[ ] util.js
-[ ] constants.js

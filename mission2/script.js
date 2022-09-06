var width = window.screen.width;
      var heliLeft = document.getElementById("heli-left");
      var heliRight = document.getElementById("heli-right");
      var posY = 10;
      var posX = 10;
      
      function heliMoveLeft(){
        heliLeft.setAttribute("style", "top:10px;left:"+posX+"px;transform:scaleX(-1);");
        heliRight.setAttribute("style", "top:60px;right:"+posX+"px;transform:");
        posX++;
        if(posX >= width/2){
          console.log(posX);
          clearInterval(t);
        }
        
      }
      var t = setInterval(heliMoveLeft, 10);
    const button1 = document.getElementById("button1")
    const plane1 = document.getElementById("plane1")
    const textHead = document.getElementById("text-head")
    const textHead2 = document.getElementById("text-head2")
    const manfaat = document.getElementById("Manfaat-Liburan")

    plane1.style.visibility = 'hidden';
    textHead.style.visibility = 'hidden';
    textHead2.style.visibility = 'hidden';
    manfaat.style.visibility = 'hidden';


    setInterval(() => {
      shake(button1, 675, 200, 2000 )  
    }, 1000);
    setInterval(() => {
      shake(button2, 675, 200, 2000 )  
    }, 1000);

    setTimeout(() => {
        plane1.style.visibility = 'visible';
        fadeIn(plane1)
    }, 1200);

    setTimeout(() => {
        textHead.style.visibility = 'visible';
        fadeIn(textHead)
    }, 1000);
    setTimeout(() => {
        textHead2.style.visibility = 'visible';
        fadeIn(textHead2)
    }, 1700);


    function fadeIn(element, duration = 600) {
        element.style.display = '';
        element.style.opacity = 0;
        let last = +new Date();
        let tick = function () {
          element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
          last = +new Date();
          if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
          }
        };
        tick();
      }
  
    function shake(e, top, left, time = 500, isTop = true, distance = 5,oncomplete ) {
      var time = time;
      var distance = distance;

      var start = (new Date()).getTime();
      animate();

      function animate() {
        var now = (new Date()).getTime();
        var elapsed = now - start;
        var fraction = elapsed / time;

        // What fraction of total time?
        if (fraction < 1) {
          var x = distance * (Math.sin(fraction * 4 * Math.PI));
          if(isTop == true){
            e.style.top = (x + top) + "px";
          }
          e.style.left = (x + left) + "px";

          // We're aiming for a smooth 40 frames/second animation.
          setTimeout(animate, Math.min(1, time - elapsed));
        } else {

          // Otherwise, the animation is complete
          if (oncomplete) oncomplete(e);
          // Invoke completion callback
        }
      }
    }

    button1.addEventListener('click', function() {
      setTimeout(() => {
        manfaat.style.visibility = 'visible';
        fadeIn(manfaat)
    }, 1000);
    });
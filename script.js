var mouseevent="empty";
var last_x,last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="purple";
width=5;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
    console.log("Works");
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

console.log("works1");

    if(mouseevent="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width;

        console.log("hi");

        console.log("Last positions of X axis and Y axis.");
        console.log("X axis = "+last_x+" Y axis =  "+last_y);
        ctx.moveTo(last_x,last_y);
        
        console.log("works2");

        console.log(" Current Position of X axis and Y axis.");
        console.log("X axis = "+current_x+"Y axis = "+current_y);

        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
        last_x=current_x;
        last_y=current_y;
  
}



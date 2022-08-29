//var defining
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
//reference code
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
//extra
color="black";
line_info=5;

//mouse event functions
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    line_info=document.getElementById("line_info").value;

    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentPositionx=e.clientX - canvas.offsetLeft;
    currentPositiony=e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_info;

        console.log("x ="+last_position_of_x+", y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        
        console.log("x is "+currentPositionx+", y is "+currentPositiony);
        ctx.lineTo(currentPositionx,currentPositiony);
        
        ctx.stroke();
    }
    last_position_of_x=currentPositionx;
    last_position_of_y=currentPositiony;
}

//clear
function clear_fu()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

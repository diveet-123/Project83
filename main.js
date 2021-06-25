canvas =
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var color = "blue";
var width_of_line = 3;

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x - e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y - e.clientY - canvas.offsetTop;

    if (MouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseUp" , my_mouseUp);
function my_mouseUp(e)
{
    current_position_of_mouse_x - e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y - e.clientY - canvas.offsetTop;

    if (MouseEvent == "mouseUp"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    current_position_of_mouse_x - e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y - e.clientY - canvas.offsetTop;

    if (MouseEvent == "mouseleave"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x - e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y - e.clientY - canvas.offsetTop;

    if (MouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x - e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y - e.clientY - canvas.offsetTop;

    if (MouseEvent == "mousemove"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

var current_position_of_mouse_x=145;
var current_position_of_mouse_y=200;

function my_touchmove(e)
 {
     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
     ctx.beginPath();
     ctx.strokeStyle - color;
     ctx.lineWidth - width_of_line;
     ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
     ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
     ctx.stroke();

     last_position_of_touch_x=current_position_of_touch_x;
     last_position_of_touch_y=current_position_of_touch_y;
}
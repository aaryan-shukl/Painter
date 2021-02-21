var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d")

var mouseEvent = "";

/*start coding from here*/

canvas.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
    
    /*create variables- color, width, radius*/
    
    var color = document.getElementById("input_color").value;
    var width = document.getElementById("input_width").value;
    var radius = document.getElementById("input_radius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", mouseUp);

function mouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mouseLeave);

function mouseLeave() {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", mouseMove);

function mouseMove() {
    mouseEvent = "mousemove";

    var cursorX = e.clientX - canvas.ofsetLeft;
    var cursorY = e.clientY - canvas.ofsetTop;

    if (mouseEvent == "mousedown") {
        console.log("cursorX = " + cursorX);
        console.log("cursorY = " + cursorY);

        ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.arc(cursorX, cursorY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
//initialize the 10x10 board
function initialization() {
    var c = document.getElementById("myCanvas");
    var width = 800;
    var height = 800;
    console.log(width);
    var ctx = c.getContext("2d");
    for (var i = 0; i <= 20; i++){
        cx = i * width / 20;
        cy = i * height / 20;
        ctx.moveTo(0,cy);
        ctx.lineTo(width,cy);``
        ctx.stroke();
        ctx.moveTo(cx,0);
        ctx.lineTo(cx,height);
        ctx.stroke();
    }
}
/* Draw the pices on the board.
* isBlack is the boolean type that checks if the user is black side
*/
function drawCircle(x,y, isBlack) {
    if (isBlack) {
        var color = "black";
    } else {
        color = "white";
    }
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

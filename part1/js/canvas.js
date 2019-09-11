//initialize the 10x10 board
function initialization() {
    var c = document.getElementById("myCanvas");
    var width = 900;
    var height = 900;
    console.log(width);
    var ctx = c.getContext("2d");
    for (var i = 0; i < 18; i++){
        cx = i * width / 18;
        cy = i * height / 18;
        ctx.moveTo(0,cy);
        ctx.lineTo(width,cy);
        ctx.moveTo(cx,0);
        ctx.lineTo(cx,height);
        ctx.strokeStyle = "#cc9966"
        ctx.stroke();
    }
}
/* Draw the pices on the board.
* isBlack is the boolean type that checks if the user is black side
*/
function drawCircle(x,y,isBlack) {
    if (isBlack) {
        var color = "black";
    } else {
        var color = "white";
    }

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.stroke();
}

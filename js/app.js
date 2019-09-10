initialization();
// drawCircle(400,400, false);

window.onload = function (){
    var isPlayer1 = true;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //detect player placing pieces on the board
    c.addEventListener("mousedown", 
    (event) => onDown(event, isPlayer1), false);
}

function onDownBlack(event, isPlayer1){
    cx = event.pageX;
    cy = event.pageY;
    x = 40 * Math.round(cx/40);
    y = 40 * Math.round(cy/40);
    drawCircle(x,y,15,isPlayer1);
    isPlayer1 = !isPlayer1;
    //round down to the nearst intersection
    //alert("x, y:"+ cx +" "+ cy);
}
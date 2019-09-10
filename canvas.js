function initialization() {
    var c = document.getElementById("myCanvas");
    var width = 800;
    var height = 800;
    console.log(width);
    var ctx = c.getContext("2d");
    for (var i = 0; i <= 10; i++){
        cx = i * width / 10;
        cy = i * height / 10;
        ctx.moveTo(0,cy);
        ctx.lineTo(width,cy);
        ctx.stroke();
        ctx.moveTo(cx,0);
        ctx.lineTo(cx,height);
        ctx.stroke();
    }
}

initialization();
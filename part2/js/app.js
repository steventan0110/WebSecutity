initialization();

window.onload = function (){
    //initialization for count and player
    var canvas = document.getElementById("board");

    //if it is player1's turn
    var Player1 = true;
    //update after each move to check if game's over
    var gameover = false;

    //initialization for chess board, 0:available, 1:player1, 2:player2
    var board = [];
    for (var i=0; i<19; i++) {
		board[i] = [];
		for (var j=0; j<19; j++) {
			board[i][j] = 0;
		}
    } 
    //console.log(board);
    
    var Player1 = true;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    canvas.addEventListener('click', function(event) {

        if (gameover) {
            return;
        }
        
        var cx = event.offsetX,
        cy = event.offsetY,
        x = Math.round(cx/50),
        y = Math.round(cy/50);
        console.log("X: "+x+" Y: "+y);
        //draw if within boundary and board coordinates usable
        if (x < 19 && y < 19 && board[x][y] == 0) {
            drawCircle(50 * x, 50 * y, Player1);
            //update the pieces on board
            board[x][y] = Player1 ? 1 : 2;
            console.log(board[x][y]);
        }

        gameover = checkWin(x,y, Player1);
        if (!gameover) {
            Player1 = !Player1;
        } else {
            var name = Player1? "Player1" : "Player2";
            alert("Game Over "+ name + " won");
        }
    }, false);

    //check if any player wins after the new movement
    function checkWin(x,y,Player1) {
        return (
            checkH(x,y,Player1) ||
            checkV(x,y,Player1) ||
            checkDL(x,y,Player1) ||
            checkDR(x,y,Player1))? true:false;
    }



    //check horizontally
    function checkH(x, y, Player1) {
        var count = 0;
        var val = Player1? 1:2;
        var lowerBound = (x - 4 >= 0)? (x-4):0;
        var higherBound = (x + 4 < 19)? (x + 4):0;
        for (var i = lowerBound; i <= higherBound; i++) {
            if ((board[i][y]) != val) {
                count = 0;
            } else {
                count++;
                if (count == 5) {
                    return true;
                }
            }
        }
        return false;
    }

    //check vertically
    function checkV(x, y, Player1) {
        var count = 0;
        var val = Player1? 1:2;
        var lowerBound = (y - 4 >= 0)? (y-4):0;
        var higherBound = (y + 4 < 19)? (y + 4):0;
        for (var i = lowerBound; i <= higherBound; i++) {
            if ((board[x][i]) != val) {
                count = 0;
            } else {
                count++;
                if (count == 5) {
                    return true;
                }
            }
        }
        return false;
    }

    //check diagonally to the right-down
    function checkDR(x, y, Player1) {
        var count = 0;
        var val = Player1? 1:2;
        var lowerBoundX = 0, lowerBoundY = 0,
        higherBoundX = 18, higherBoundY = 18;
        //find the smaller value in lower bound x,y coordinates
        var lowerBound = (x < y)? x : y;
        //define lower bound points
        if (lowerBound -4 < 0) {
            lowerBoundX = x - lowerBound;
            lowerBoundY = y - lowerBound;
        } else {
            lowerBoundX = x - 4;
            lowerBoundY = y - 4;
        }
        var higherBound = (x < y)? y : x;
        if (higherBound + 4 > 18) {
            higherBoundX = x + 18 - higherBound;
            higherBoundY = y + 18 - higherBound;
        } else {
            higherBoundX = x + 4;
            higherBoundY = y + 4;
        }

        var i = lowerBoundX;
        var j = lowerBoundY;
        while(i <= higherBoundX) {
            if (board[i][j] != val) {
                count = 0; 
            } else {
                count++;
                if (count == 5) {
                    return true;
                }
            }
            i++;
            j++;
        }
        return false;
    }

    //check diagonally to the left-up
    function checkDL(x, y, Player1) {
        var count = 0;
        var val = Player1? 1:2;
        var lowerBoundX = 0, lowerBoundY = 0,
        higherBoundX = 18, higherBoundY = 18;

        //find the coordinates for lower and higher bound
        diff_xr = 18 - x;
        diff_yu = y;
        diff_xl = x;
        diff_yd = 18 - y;
        right_up = (diff_xr < diff_yu)? diff_xr:diff_yu;
        left_down = (diff_xl < diff_yd)? diff_xl:diff_yd;
        lowerBoundX = x - left_down;
        lowerBoundY = y + left_down;
        higherBoundX = x + right_up;
        higherBoundY = y - right_up;

        //check five in a row
        var i = lowerBoundX;
        var j = lowerBoundY;
        while(i <= higherBoundX) {
            if (board[i][j] != val) {
                count = 0; 
            } else {
                count++;
                if (count == 5) {
                    return true;
                }
            }
            i++;
            j--;
        }
        return false;
    }
};



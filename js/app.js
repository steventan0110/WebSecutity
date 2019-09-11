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
        x = Math.round(cx/40),
        y = Math.round(cy/40);
        //draw if within boundary and board coordinates usable
        if (x <19 && y < 19 && board[x][y] == 0) {
            drawCircle(40 * x, 40 * y, Player1);
            //update the pieces on board
            board[x][y] = Player1 ? 1 : 2;
            console.log(board[x][y]);
        }

        gameover = check(x,y, Player1);
        if (!gameover) {
            Player1 = !Player1;
        } else {
            var name = Player1? "Player1" : "Player2";
            alert("Game Over "+ name + " won");
        }
    }, false);

    //check if any player wins after the new movement




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

    //check diagonally to the right
    function checkDR(x, y, Player1) {
        var count = 0;
        var val = Player1? 1:2;
        var lowerBoundX = (x - 4 >= 0)? (x-4):0;
        var lowerBoundY = (y - 4 >= 0)? (y-4):0;
        var higherBoundX = (x + 4 < 19)? (x + 4):0;
        var higherBoundY = (y + 4 < 19)? (y + 4):0;
        var lowerBound = (lowerBoundX > lowerBoundY)?
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

    //check diagonally to the left
    function checkDL(x, y, Player1) {
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
};



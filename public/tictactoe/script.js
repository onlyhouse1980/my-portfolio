let fields = [];
let gameOver = false;
let currentShape = 'X';



function fillShape(id){
  if(!fields[id] && !gameOver) {
    if(currentShape == 'Player-1') {
        currentShape = 'Player-2';
        document.getElementById('Player-2').classList.add('player-inactive');
        document.getElementById('Player-1').classList.remove('player-inactive');
    } else {
        currentShape = 'Player-1';
        document.getElementById('Player-2').classList.remove('player-inactive');
        document.getElementById('Player-1').classList.add('player-inactive');
    }
    fields[id] = currentShape;
    console.log(fields)
    draw();
    checkForWin();
}}

function draw(){
    for(let i = 0; i < fields.length; i++) {
        if (fields[i] == 'Player-1') {
            document.getElementById('circle-' + i).classList.remove('d-none')        
            }
        if (fields[i] == 'Player-2') {
            document.getElementById('cross-' + i).classList.remove('d-none')        
            }
        }
    }

    
function checkForWin() {
    let winner;
        
    
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        //document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        //document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        //document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        //document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        //document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        //document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        //document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1)';
    }
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        //document.getElementById('line-8').style.transform ='rotate(45deg) scaleX(1)';
    }
else {}
    if(winner) {
        document.getElementById('winnerIs').classList.remove('d-none');
        document.getElementById('winnerIs').innerHTML = (` ${winner} WINS!!!`)
        document.getElementById('winnerIs').classList.add('winOpacity');
        console.log('Winner!', winner)
        document.getElementById('game').classList.add('winOpacity');
        gameOver = true;
        setTimeout(function(){
            document.getElementById('game-over').classList.remove('d-none')
        }, 2000)
        /* setTimeout(function(){
            document.getElementById('table').classList.add('d-none')
        }, 2000) */
        setTimeout(function(){
            document.getElementById('restartButton').classList.remove('d-none');
        }, 2750)
        
    }
}


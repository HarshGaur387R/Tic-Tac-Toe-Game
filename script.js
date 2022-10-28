let boxes = [...document.getElementsByClassName('box')];

const clicksoundX = new Audio('sound/click.mp3'); //Sound Effect by irinairinafomicheva from Pixabay.

const clicksoundO = new Audio('sound/click.mp3'); //Sound Effect by irinairinafomicheva from Pixabay.

const resetSound = new Audio('sound/correct-choice.mp3'); //Sound Effect by  unadamlar from Pixabay.

const winningSound = new Audio('sound/success.mp3'); //Sound Effect by FunWithSound from Pixabay.

let turn = 'X';
let winner = '';
let whosTurn = document.getElementById('whosTurn');
whosTurn.innerHTML = 'Turn: X';

let possibilities = 
[
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

let spanElements = [...document.getElementsByTagName('span')]

function checkWinner(){

    let w = '';

    possibilities.forEach((p)=>{

        if(boxes[p[0]].textContent == 'X' && boxes[p[1]].textContent == 'X' && boxes[p[2]].textContent == 'X'){
            w = 'X';
            return;
            
        }

        if(boxes[p[0]].textContent == 'O' && boxes[p[1]].textContent == 'O' && boxes[p[2]].textContent == 'O'){
            w = 'O';
            return;
            
        }
    });

    return w;
}


boxes.forEach((e) => {
     
    e.addEventListener('click', () => {
        if (e.textContent != 'O' && e.textContent != 'X') {
            if (turn === 'X') {
                e.textContent = 'X';
                whosTurn.textContent = 'Turn: O'
                turn = 'O';
                clicksoundX.playbackRate = 2;
                clicksoundX.play();

            }
            else if (turn === 'O') {
                e.textContent = 'O'
                whosTurn.textContent = 'Turn: X'
                turn = 'X';
                clicksoundO.playbackRate = 2;
                clicksoundO.play();
            }
        }

        winner = checkWinner();  

        if(winner == 'X'){
            // console.log('winner :X');
            document.getElementById('winner').innerHTML = 'Winner: X';
            document.getElementById('winnerPopUp').style.display = 'initial';
            document.getElementById('winnerPopUp').innerHTML = 'Congratulations X :)'

            let timeout = setTimeout(()=>{
                document.getElementById('winnerPopUp').style.display = 'none';
            },2000);
            winningSound.play();
        }
        else if(winner == 'O'){
            // console.log('winner :O');
            document.getElementById('winner').innerHTML = 'Winner: O';
            document.getElementById('winnerPopUp').style.display = 'initial';
            document.getElementById('winnerPopUp').innerHTML = 'Congratulations O :)'

            let timeout = setTimeout(()=>{
                document.getElementById('winnerPopUp').style.display = 'none';
            },2000);
            winningSound.play();
            
        }

    });  
});

document.getElementById('reset').addEventListener('click',()=>{
    boxes.forEach((e)=>{
        e.textContent = '';
    });

    winner = '';
    turn = 'X';
    document.getElementById('whosTurn').innerHTML = 'Turn: X';
    document.getElementById('winner').innerHTML = 'Winner:';
    document.getElementById('winnerPopUp').style.display = 'none';
    resetSound.play();
});


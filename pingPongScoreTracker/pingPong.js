const p1Score = document.querySelector('#scoreDisplay1')
const p2Score = document.querySelector('#scoreDisplay2')

const p1btn = document.querySelector('#buttonP1')
const p2btn = document.querySelector('#buttonP2')
const resetbtn = document.querySelector('#buttonReset')

const scoreSection = document.querySelector('#scores')


let score1 = 0;
let score2 = 0;
let maxScore = 5;

p1btn.addEventListener('click', function(){
    score1++;
    if(score1 === maxScore){
        p1btn.disabled = true;
        p2btn.disabled = true;

        p1Score.classList.add('winner');
        p2Score.classList.add('loser');

        const declaration = document.createElement('p')
        declaration.innerText= "Winner is Player 1" ;
        scoreSection.appendChild(declaration)

    }
    p1Score.textContent = score1;
    
})

p2btn.addEventListener('click', function(){
    score2++;
    if(score2 === maxScore){
        p1btn.disabled = true;
        p2btn.disabled = true;

        p2Score.classList.add('winner');
        p1Score.classList.add('loser');


        const declaration = document.createElement('p')
        declaration.innerText= "Winner is Player 2" ;
        scoreSection.appendChild(declaration)


    }
    p2Score.textContent = score2;
    
})

resetbtn.addEventListener('click', function(){
    score1 = 0;
    score2 = 0;
    p1Score.textContent = score1;
    p2Score.textContent = score2;
    p1btn.disabled = false;
    p2btn.disabled = false;
    p1Score.classList.remove('winner');
    p2Score.classList.remove('loser');
    p1Score.classList.remove('loser');
    p2Score.classList.remove('winner');

    const declaration = scoreSection.querySelector('p')
    
    scoreSection.removeChild(declaration)





})

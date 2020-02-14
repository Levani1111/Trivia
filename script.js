let result = document.querySelector('.result')
let correct =document.querySelectorAll('.correct')
let start= document.querySelector('.start')
let option = document.querySelectorAll('.option')
let q = document.querySelectorAll('.q')
let directions= document.querySelector('.directions')
let restart = document.querySelector('.restart')
console.log(q)



let currentQIndex = 0
let previousQIndex = 0
let score = 0

start.addEventListener('click', startTrivia)
function startTrivia(){
    q[currentQIndex].style.display = 'block' 
    //this will make the first question load
    console.log('current', q[currentQIndex])
    directions.style.display= 'none'
    //removes the directions and start button  
}
console.log(q)
  
// it makes work buttons work
option.forEach(buttons =>{
    buttons.addEventListener('click', next)
})
function next(evt){
    console.log('this is next')
    evt.preventDefault()
    //this prevents the page from default 
    previousQIndex = currentQIndex
    currentQIndex++
    console.log(q[currentQIndex])
    q[previousQIndex].style.display = 'none' 
    //removes last question
    q[currentQIndex].style.display = 'block' 
    //display next question
}

//total score in counsel 
function updateScore(){
     score++
    if(score === 10){
        result.textContent = '100% Great job!'
    } else if(score === 9  ){
        result.textContent= '90% Great job!'
    } else if( score === 8){
        result.textContent = '80% Good job!'
    } else if( score === 7){
        result.textContent= '70% Good job!'
    }else if(score === 6){
        result.textContent = '60% Looks like you need to learn!'
    }else if(score === 5){
        result.textContent = '50% Looks like you need to learn!'
    }else if(score === 4){
        result.textContent = '40% Looks like you need to learn!'
    }else if(score === 3){
        result.textContent = '30% Looks like you need to learn!'
    }else if(score === 2){
        result.textContent= '20% Looks like you need to learn!'
    }else if(score === 1){
        result.textContent = '10% Looks like you need to learn!'
    }else if(score === 0){
        result.textContent = '0% Looks like you need to learn!'
    }
}
console.log('updated score', score)


for(let i=0; i<correct.length; i++){
    correct[i].addEventListener('click', correctAnswer)
    console.log('correct') 
}

function correctAnswer(evt){
    console.log('evt target', evt.target)
    if(evt.target.classList.contains('correct')){
        console.log('this is correct')
        updateScore()
    }
}


restart.addEventListener('click', restartTrivia)
function restartTrivia(){
    window.location.reload(true);  // this makes restart 
    
}
//Done

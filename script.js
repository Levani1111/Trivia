let result = document.querySelector('.result')
let correct =document.querySelectorAll('.correct')
let start= document.querySelector('.start')
let option = document.querySelectorAll('.option')
let q = document.querySelectorAll('.q')
let directions= document.querySelector('.directions')
let restart = document.querySelector('.restart')
//console.log(q)



let currentQIndex = 0
let previousQIndex = 0
let score = 0

start.addEventListener('click', startTrivia)
function startTrivia(){
    q[currentQIndex].style.display = 'block' 
    //this will make the first question load
    //console.log('current', q[currentQIndex])
    directions.style.display= 'none'
    //removes the directions and start button  
}
//console.log(q)
  


option.forEach(buttons =>{
    buttons.addEventListener('click', next)
})
function next(evt){
    //console.log('this is next')
    evt.preventDefault()
    //this prevents the page from default 
    previousQIndex = currentQIndex
    currentQIndex++
    //console.log(q[currentQIndex])
    q[previousQIndex].style.display = 'none' 
    //removes last question
    q[currentQIndex].style.display = 'block' 
    //display next question
}


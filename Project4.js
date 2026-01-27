let input = document.querySelector('#input')
let submitGuess = document.querySelector('#sbt')
let prevGuess = document.querySelector('#prevGuess')
let guessLeft = document.querySelector('#guessRemaining')
let lowOrHigh = document.querySelector('.lowOrHigh')
let newGame = document.querySelector('#newGame')
let form = document.querySelector('form')
let randomNumber = Math.floor(Math.random()*100 + 1)
let canPlay = true
let click = new Audio('click.mp3')
let last_attempt = new Audio('last_attempt.mp3')
let per_attempt_fail = new Audio('per_attempt_fail.mp3')
let win = new Audio('win.mp3')
 


let c = 1

form.addEventListener('submit',function(e){
    e.preventDefault()
    let guess = input.value
    if(canPlay){ 
validate(guess)
console.log(randomNumber);

    }
    
  

})


let count
function validate(guess){
    if(guess === '' || isNaN(guess)){
   alert(`ENTER A VALID NUMBER !!`)
   
    }
   else if(guess>100 || guess<0){
    alert(`ENTER A NUMBER BETWEEN 0-100 !!`)
   }else{
     guess = Number(guess)
       count = 10 - c
    if(count === 0){
        printMessage(`GAME OVER! RANDOM NUMBER IS ==> ${randomNumber}`)
        displayGuess(guess)
        displayCheck(guess)
         if(!(guess === randomNumber)){
 last_attempt.play()
        }
        endGame()
    }else{
        c++
        displayGuess(guess)
        displayCheck(guess)
    }
   }
}

function displayCheck(guess){
    if(guess > randomNumber){
        printMessage(`Guessed Number is too High`)
    }else if(guess < randomNumber){
    printMessage(`Guessed Number is too Low`)
    }else if(guess === randomNumber){
        win.play()
        printMessage(`CONGO !! YOU GUESSED IT RIGHT !!`)
        endGame()
    }

 if(count>0 && guess !== randomNumber){
        input.value = ''
    per_attempt_fail.play()
    }
    }


function endGame(){
  canPlay = false
  newGame.style.display = 'unset'
  input.value = ''
  input.setAttribute('disabled','')
  newGame.addEventListener('click',() => {
    click.play()
  startGame()
  })
    
}
function startGame(){
canPlay = true
newGame.style.display = 'none'
input.removeAttribute('disabled')
lowOrHigh.innerHTML = ''
guessLeft.innerHTML = `10`
c = 1
prevGuess.innerHTML = ''
 randomNumber = Math.floor(Math.random()*100 + 1)

}


function printMessage(message){
lowOrHigh.innerHTML = `${message}`
}

function displayGuess(guess){
  prevGuess.append(`${guess},`)
  guessLeft.innerHTML = `${count}`
}

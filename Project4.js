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
 

/*5️⃣ ✅ CORRECT way to stop the game (BEST PRACTICE)
🔥 Add a GUARD clause
Option 1: Stop in event listener (recommended)
form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (!canPlay) return   // ⛔ STOP HERE

  let guess = input.value
  validate(guess)
})*/
let c = 1
// if(canPlay){ // here if(canPlay) is useless 
form.addEventListener('submit',function(e){
    e.preventDefault()
    let guess = input.value
    if(canPlay){ // now this is useful that when canPlay = true only then validate will run else not or validate hi run nahin hoga then kuch nahin hoga
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


// //  // NOTE value nikaalne ke liye we use .value but value daalne ke liye we use standard methods like .innerHTML,.outerHTML,.innerText etc 

// let randomNumber=Math.floor(Math.random()*100 + 1)
// let submit=document.querySelector('#sbt')
// let userInput=document.querySelector('#input')
// let prevGuesses=document.querySelector('#prevGuess')
// let guessRemaining=document.querySelector('#guessRemaining') 
// let lowOrHi=document.querySelector('.lowOrHigh')
// let newGamee=document.querySelector('#newGame')
// let sound_win=new Audio("win.mp3")
// let sound_per_attempt_fail=new Audio("per_attempt_fail.mp3")
// let last_attempt=new Audio("last_attempt.mp3")
// let click=new Audio('click.mp3')
// // console.log(prevGuesses);
// // console.log(guessRemaining);
 
// let canPlayGame=true // PLAYS A VERY IMPORTANT ROLE IN CASE OF MAKING GAMES
// let numGuess=1

// if(canPlayGame){
//    submit.addEventListener('click',(e)=>{
//      e.preventDefault() 
//      const guess=Number(userInput.value) // NOTE THE DEPTH OF THIS LINE
//           validateGuess(guess)
//       lowOrHi.style='display:unset'
//    })
// }


// function validateGuess(guess){
//     if(isNaN(guess)|| guess==''){
//         alert('Please Enter A Valid Number'); // ISS ALERT SE POP UP AA JAATA HAI WITH OUR CUSTOM MESSAGE
//     }
//     else if(guess<=0|| guess>100){
//         alert('Please Enter a Number Greater Than 0 and less than 101')
//     }
//     else{
//         if(numGuess===10){
//             displayMessage(`Game Over Your Random Number Is ==> ${randomNumber}`)
//            displayGuess(guess)
//             endGame(guess)
//         }else {
//         displayGuess(guess)
//         checkGuess(guess)
//         }
//     }

// }

// function displayMessage(message){
// lowOrHi.innerHTML=`${message}`

// }
// function displayGuess(guess){
    
    
//     if((guess!==randomNumber)&&(numGuess!==10)){
//     sound_per_attempt_fail.play()// NOTE THIS .play() method
//     }else if(numGuess===10){
//  last_attempt.play()
//     } 
//      numGuess++
//     prevGuesses.innerHTML+=`${guess}, `
//     userInput.value=''
//     guessRemaining.innerHTML=`${11-numGuess}`


// }
// function checkGuess(guess){
// if(guess>randomNumber){
//     displayMessage(`Number Is Toooo High`)
// }else if(guess<randomNumber){
//     displayMessage(`Number Is Toooo Low`)
// }else if(guess===randomNumber){
//     sound_win.play()
//     displayMessage(`You Guessed it Correctly !!`)
//     endGame(guess)
// }
// }

// function endGame(){
//     newGamee.style='display:unset'
//     canPlayGame=false
//     userInput.setAttribute('disabled','') // NOTE THE SYNTAX OF DISABLED ATTRIBUT ELSE IT WON'T WORK ALSO ALSO ALSO NOTE IT IS A FUNCTION
//     newGame()
// }
// function newGame(){
//     canPlayGame=true
//    newGamee.addEventListener('click',function(){
//     click.play()
//     userInput.value=''
//     userInput.removeAttribute('disabled')
//     prevGuesses.innerHTML=''
//     randomNumber=Math.floor(Math.random()*100 + 1)
//     numGuess=1
//     guessRemaining.innerHTML='10'
//       newGamee.style='display:none'
//       lowOrHi.style='display:none'
      
//    })
// }
// // NOTE AGAR ELEMENT ALREADY FORMED HAI HTML MAI THEN USE AGAIN AND AGAIN REMOVE MAT KARO AS EK BAAR REMOVE KARTE HI VO DOM SE HAT JAAYEGA  INSTEAD USE THE CSS STYLE 'display:none' and 'display:unset'// BUT IF EVERYTIME WE ARE CREATING AND REMOVING THAT ELEMENT THEN IT IS PERFECTLY FINE 

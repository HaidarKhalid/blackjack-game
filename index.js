let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let errorMessageEl = document.getElementById("errormessage-el")
let winnerEl = document.getElementById("winner-el")


let cards = []
let sum = 0
let isAlive = (false)
let hasBlackJack = false
let message = "Want to play a round?"
let out = false

/////// ((((
    let cardsElBot = document.getElementById("cards-el(bot)")
    let sumElBot = document.getElementById("sum-el(bot)")
    let messageElBot = document.getElementById("message-bot")
    let NewcardBot = document.getElementById("newcard-bot")
    
    
    let cardsBot = []
    let sumBot = 0
    let isAliveBot = (false)
    let hasBlackJackBot = false
    let messageBot = ""
    let drawANewCardBot = false
    let outBot = false


//////// )))))))



function startgame() {
    let firstCard = getrandomnumber()
    let secondCard = getrandomnumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = (true)
    rendergame()
////// bot bellow
    let firstCardBot = getrandomnumber()
    let secondCardBot = getrandomnumber()
    cardsBot = [firstCardBot, secondCardBot]
    sumBot = firstCardBot + secondCardBot
    isAliveBot = (true)    
    rendergamebot()
}


function rendergame() {

    if (sum <= 20) {
        message = ("Do you want draw another card?")
    } else if (sum === 21) {
        message = ("congrats you've got a blackjack! (:")
        hasBlackJack = true
    } else {
        message = ("sorry you lose ):")
        isAlive = false
        out = true
    }


    messageEl.innerText = message
    sumEl.innerText = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
    cardsEl.innerText += " " + cards[i]
    }
}


function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getrandomnumber()
        cards.push(card)
        sum += card
        rendergame()
    } else {
        errorMessageEl.textContent = "you can not get a new card !"
    
    }

}


function getrandomnumber() {
    let randomnumber = Math.floor(Math.random() * 13) + 1
    if (randomnumber > 10) {
        return 10
    } else if (randomnumber === 1) {
        return 11
    } else {
        return randomnumber
    }
}

///// bot below ////

function getrandomnumberOf2() {
    return Math.floor(Math.random() * 2)
}
let randomBollen = [true, false] 
let tOrf = randomBollen[getrandomnumberOf2()]
console.log(tOrf)



function Threeseconds() {
    setTimeout(reloadPage, 4000)
}
function reloadPage() {
    location.reload();
} 

   



function rendergamebot() {
    
    if (isAliveBot === true && hasBlackJackBot === false && tOrf === true && drawANewCardBot === false) {
        let cardBot = getrandomnumber()
        cardsBot.push (cardBot)
        sumBot += cardBot
    }
    if (sumBot < 21) {
        isAliveBot = true
    }
    else if (sumBot === 21) {
        messageBot = ("The bot got a blackjack !")
        hasBlackJackBot = true
        isAliveBot = true
    } else if (sumBot > 21) {
        messageBot = ("The bot has lose!")
        isAliveBot = false
        outBot = true

    }

    

}
 



    


function endgame() {
    if (out === true && outBot === true) {
    winnerEl.innerText = "no one did win , The page will reload in 3sec"
    } else  if (isAlive === true && sumBot > 21 && sum <= 21) {
        winnerEl.innerText = 'you are the winner ! , The page will reload in 3sec'
    } else  if (isAliveBot === true && sumBot <= 21 && sum < sumBot) {
            winnerEl.innerText = 'the bot win , The page will reload in 3sec'
    } else if (isAliveBot === true && out === true && hasBlackJack === false) {
        winnerEl.innerText = "the bot win ! , The page will reload in 3sec"
    } else if (isAlive === true && hasBlackJack === false && sum > sumBot) {
        winnerEl.innerText = 'you are the winner ! , The page will reload in 3sec'
    } else if (hasBlackJack === true && hasBlackJackBot === true) {
        winnerEl.innerText = ("Draw , The page will reload in 3sec")
    }  else if (hasBlackJack === true && hasBlackJackBot === false) {
        winnerEl.innerText = ("you are the winner , The page will reload in 3sec")
    }  else if (hasBlackJack === false && hasBlackJackBot === true) {
        winnerEl.innerText = ("The bot win , The page will reload in 3sec")
    } else if (out === true && outBot === false) {
        winnerEl.innerText = ("The bot win , The page will reload in 3sec")
    } else if (out === false && outBot === true) {
        winnerEl.innerText = ("you are the winner , The page will reload in 3sec")
    } else if (isAlive === false && isAliveBot === false) {
        winnerEl.innerText = 'you are the winner ! , The page will reload in 3sec'
    }

    
    messageElBot.innerText = messageBot
    sumElBot.innerText = "Sum: " + sumBot
    cardsElBot.textContent = "Cards: "
    for (let B = 0; B < cardsBot.length; B++) {
    cardsElBot.innerText += ' ' + cardsBot[B]
    
}
Threeseconds()
}



document.addEventListener('DOMContentLoaded', () => {
//card options
const cardArray = [
  {
    name: 'eren',
    img: 'images/eren.png'
  },
  {
    name: 'eren',
    img: 'images/eren.png'
  },
  {
    name: 'armin',
    img: 'images/armin.png'
  },
  {
    name: 'armin',
    img: 'images/armin.png'
  },
  {
    name: 'mikasa',
    img: 'images/mikasa.jpeg'
  },
  {
    name: 'mikasa',
    img: 'images/mikasa.jpeg'
  },
  {
    name: 'levi',
    img: 'images/levi.jpeg'
  },
  {
    name: 'levi',
    img: 'images/levi.jpeg'
  },
  {
    name: 'reiner',
    img: 'images/Reiner.png'
  },
  {
    name: 'reiner',
    img: 'images/Reiner.png'
  },
  {
    name: 'bertholdt',
    img: 'images/Bertholdt.png'
  },
  {
    name: 'bertholdt',
    img: 'images/Bertholdt.png'
  }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board

function createBoard() {
  for (let i=0; i<cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/logo.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/white.jpg')
    cards[optionTwoId].setAttribute('src', 'images/white.jpg')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/logo.png')
    cards[optionTwoId].setAttribute('src', 'images/logo.png')
    alert('Sorry, try again')
  }
  cardsChosen=[]
  cardsChosenId=[]
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length ===cardArray.length/2) {
    resultDisplay.textContent = 'Sasageyo! sasageyo! Shinzou wo sasageyo!'
  }
}

//flip your card
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }

}

createBoard()





})

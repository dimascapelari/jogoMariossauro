const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false
// Variável que controla o pulo do dinossauro
let position = 0

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump()
    }
  }
}

function jump() {


  isJumping = true

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval)
      // Velocidade Descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval)
          isJumping = false
        } else {
          position = position - 10
          dino.style.bottom = position + 'px'
        }
      }, 20)
    } else {
      // Subindo
      position = position + 10
      dino.style.bottom = position + 'px'
    }
  }, 10)
}


function createCactus() {
  // Cria uma div
  const cactus = document.createElement('div')
  let cactusPosition = 1000
  let randomTime = Math.random() * 6000

  console.log(randomTime)

  // Cria uma class para div
  cactus.classList.add('cactus')

  // Posição do cactus
  cactus.style.left = 1000 + 'px'

  // Adiciona um filho (coloca o cactus dentro)
  background.appendChild(cactus)

  let leftInterval = setInterval(() => {
    if (cactusPosition < - 60) {
      clearInterval(leftInterval)
      // Remove o elemento filho
      background.removeChild(cactus)
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // Game over
      clearInterval(leftInterval)
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1><p><i>Dimas Capelari 2022</i></p>'
    } else {
      // velocidade das bombas
      cactusPosition = cactusPosition - 7
      cactus.style.left = cactusPosition + 'px'
    }
  }, 20)

  // Chama a função novamente de dentro dela mesma infinitamente
  setTimeout(createCactus, randomTime)
}

/*function pulo() {
  jump()
}*/


createCactus()
document.addEventListener('keyup', handleKeyUp)

document.addEventListener('click', jump)
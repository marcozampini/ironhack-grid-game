const gridElement = document.querySelector('.grid')

// Cells
const gridWidth = 5
const gridHeight = 5
const cells = []

let currentPosition = Math.floor(Math.random() * (gridWidth * gridHeight))

let score = 0

// Populate the grid
for (let i = 0; i < gridWidth * gridHeight; i++) {
  const cell = createCell()
  gridElement.appendChild(cell)
  // save the cell for later!
  cells.push(cell)
}

function createCell() {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  return cell
}

function showPlayer() {
  cells[currentPosition].classList.add('player')
}
function removePlayer() {
  cells[currentPosition].classList.remove('player')
}

function movePlayer(newPosition) {
  removePlayer()
  currentPosition = newPosition
  showPlayer()
}

showPlayer()

document.addEventListener('keydown', (event) => {
  let newPosition
  switch (event.key) {
    case 'ArrowUp':
      if (currentPosition < gridWidth) {
        break
      }
      newPosition = currentPosition - gridWidth
      movePlayer(newPosition)
      break
    case 'ArrowDown':
      if (
        currentPosition > gridWidth * (gridHeight - 1) - 1 &&
        currentPosition < gridWidth * gridHeight
      ) {
        break
      }
      newPosition = currentPosition + gridWidth
      movePlayer(newPosition)
      break
    case 'ArrowLeft':
      if (currentPosition % gridWidth === 0) {
        break
      }
      newPosition = currentPosition - 1
      movePlayer(newPosition)
      break
    case 'ArrowRight':
      if (currentPosition % gridWidth === gridWidth - 1) {
        break
      }
      newPosition = currentPosition + 1
      movePlayer(newPosition)
      break
  }
})

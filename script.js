console.log('etch a sketch!')

const body = document.querySelector ('body');
const container = document.querySelector ('.container');

const sizeButton = document.querySelector ('button');

body.style.backgroundColor = 'gray';
container.style.backgroundColor = 'white';


for (let i = 1; i < 257; i++) {
  const square = document.createElement('div');
  
  container.appendChild(square);
  
  square.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
  })
}


sizeButton.onclick = function resizeGrid() {
  let userInput = prompt('How many squares per side would you like? Please select a number between 4 and 100', '16')
  console.log(userInput);
}

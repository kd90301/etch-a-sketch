console.log('etch a sketch!')

const body = document.querySelector ('body');
const container = document.querySelector ('.container');

body.style.backgroundColor = 'gray';
container.style.backgroundColor = 'white';


for (let i = 1; i < 257; i++) {
  const square = document.createElement('div');
  
  container.appendChild(square);
  
  square.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
  })}





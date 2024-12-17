console.log('etch a sketch!')

const container = document.querySelector ('.container');

for (let i = 1; i < 257; i++) {
  const square = document.createElement('div');
  
  container.appendChild(square);
  
  square.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'gray';
  })}





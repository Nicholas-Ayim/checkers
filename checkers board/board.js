let board = document.querySelector('.board');
let sourceCellIndex = -1; // Variable to store the index of the source cell

for (let i = 0; i < 64; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  const imageContainer = document.createElement('div');

  if ((Math.floor(i / 8) % 2 === i % 2) && i < 24) {
    cell.classList.add('black');
    const imageElement = document.createElement('img');
    imageElement.src = 'checker2.jpg';
    imageElement.classList.add('piece2');
    imageContainer.appendChild(imageElement);
    cell.appendChild(imageContainer);
  } else if ((Math.floor(i / 8) % 2 === i % 2) && i > 40) {
    cell.classList.add('blue');

    const image = document.createElement('img');
    image.src = 'checke3.jpg';
    image.classList.add('piece1');

    imageContainer.appendChild(image);
    cell.appendChild(imageContainer);
  } else if (((Math.floor(i / 8)) % 2 === i % 2) && i > 23 && i < 32) {
    cell.classList.add('black');
  } else if (((Math.floor(i / 8)) % 2 === i % 2) && i > 31 && i < 39) {
    cell.classList.add('blue');
  }
  if((i === 9) || (i === 16)){
    cell.innerHTML = '';
  }
  if (i === 0) {
    imageContainer.addEventListener('click', function(event) {
      sourceCellIndex = i; // Set the source cell index
    });
  } else if ((i === 9 || i === 16)){
    
    cell.addEventListener('click', function(event) {
      event.preventDefault();
    });

    cell.addEventListener('click', function(event) {
      event.preventDefault();
      const dropElementDom = document.querySelector('.board .cell:nth-child(1) .piece2');

      if (cell.children.length === 0 && sourceCellIndex === 0) {
        // Move the image element to the current cell
        cell.appendChild(dropElementDom);
      }

      sourceCellIndex = -1; // Reset the source cell index
    });
  }

  board.appendChild(cell);
}

const body = document.querySelector('body');
  const button = document.createElement('button');
button.textContent = 'click :)';
  button.addEventListener('click', () => {
    prompt('how many squares per grid?');
  })
  


  body.appendChild(button);

const div = document.createElement('div');
div.classList.add('grid');
div.id = 'myGrid';

body.appendChild(div);

    // Define the grid size
    const rows = 16;
    const columns = 16;

    // Get the grid container element
    const gridContainer = document.getElementById('myGrid');

    // Create the grid dynamically
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        // Create a grid item element
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        // Append the grid item to the grid container
        gridContainer.appendChild(gridItem);
      }
    }

    const gridItems = document.querySelectorAll('.grid-item');

2 
    gridItems.forEach((gridItem) => {

    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = 'blue';
    })

    gridItem.addEventListener('mouseout', () => {
      gridItem.style.backgroundColor = '';
    })
  })


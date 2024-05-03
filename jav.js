const body = document.querySelector('body');
  const button = document.createElement('button');
button.textContent = 'create grid :)';
const div = document.createElement('div');
div.classList.add('grid');
body.appendChild(button);
body.appendChild(div);

//Generate a random color
function color () { for (let i = 0; i < 100; i++) {
   return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
}

  button.addEventListener('click', () => {
    let noOfSquares = prompt('how many squares per grid?');
    if (noOfSquares >= 100) {
      alert('number has to be less than 100!')
    } 
      else {
        while (div.firstChild){
    div.removeChild(div.firstChild);
  }
  
     // Get the grid container element
     const gridContainer = document.querySelector('.grid');
 
     // Create the grid 
     
       for (let j = 0; j < noOfSquares; j++) {
    
         const rows = document.createElement('div');
         rows.className = 'grids';

 // Append the grid item to the grid container
         gridContainer.appendChild(rows);

         for (let i = 0; i < noOfSquares; i++) {
          // Create a grid item element
          const column = document.createElement('div');
          column.className = 'grid-item';
            rows.appendChild(column)
         } 
       }
     
 
     const gridItems = document.querySelectorAll('.grid-item');
 
 2 
     gridItems.forEach((gridItem) => {
        let gridOpacity = 0.1;
     gridItem.addEventListener('mouseover', () => {
       gridItem.style.backgroundColor = color();
       
       if (gridOpacity < 1 ){
         gridOpacity += 0.1;
         gridItem.style.opacity = gridOpacity;
       }
      
     })
 
   
   })

   
  }
  

  })
  





   
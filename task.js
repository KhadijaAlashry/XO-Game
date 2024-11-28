function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
  
    // Check if the cell is empty before placing X or O
    if (event.target.innerHTML === "") {
      event.target.innerHTML = draggedElement.innerHTML;
    }
  }

  function resetGame() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
      square.innerHTML = "";
    });
  }



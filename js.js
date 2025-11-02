// Track dragged item
let draggedItem = null;

// Make items draggable
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', () => {
    draggedItem = item;
    item.classList.add('dragging');
  });

  item.addEventListener('dragend', () => {
    draggedItem = null;
    item.classList.remove('dragging');
  });
});

// Setup drop zones
document.querySelectorAll('.slot').forEach(slot => {
  slot.addEventListener('dragover', e => {
    e.preventDefault();
    slot.classList.add('drag-over');
  });

  slot.addEventListener('dragleave', () => {
    slot.classList.remove('drag-over');
  });

  slot.addEventListener('drop', () => {
    if (draggedItem) {
      slot.innerHTML = draggedItem.innerHTML;
      slot.classList.remove('drag-over');
    }
  });
});
const btn = document.getElementById('btn');
const level = document.getElementById('lvl');
const pts = document.getElementById('pts');
let pointSys = 1
let points = 0

btn.addEventListener('click', () => {
pointSys++

  lvl.innerHTML = `<h4> Level: ${pointSys}</h4>`;
  points += 2;
  
  pts.innerHTML = `<h4> Points: ${points}</h4>`;
})




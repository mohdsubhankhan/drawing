// Select elements
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color-picker');
const brushSize = document.getElementById('brush-size');
const clearBtn = document.getElementById('clear-btn');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - document.querySelector('.toolbar').offsetHeight;

// Variables to track drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set initial brush settings
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = brushSize.value;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// Start drawing
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Stop drawing
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));

// Draw on the canvas
canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Update brush color
colorPicker.addEventListener('input', (e) => {
  ctx.strokeStyle = e.target.value;
});

// Update brush size
brushSize.addEventListener('input', (e) => {
  ctx.lineWidth = e.target.value;
});

// Clear canvas
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

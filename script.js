let leftClickColor = '#000000'; // Cor inicial para o botão esquerdo
let rightClickColor = '#ff0000'; // Cor inicial para o botão direito
let isMouseDown = false; // Indica se o mouse está pressionado

// Atualiza as cores do botão esquerdo e direito
document.getElementById('left-color').addEventListener('input', () => {
    leftClickColor = document.getElementById('left-color').value;
});
document.getElementById('right-color').addEventListener('input', () => {
    rightClickColor = document.getElementById('right-color').value;
});

// Cria a grade de pixels conforme os parâmetros definidos
function createGrid() {
    const gridWidth = document.getElementById('grid-width').value;
    const gridHeight = document.getElementById('grid-height').value;
    const pixelSize = document.getElementById('pixel-size').value;
    const pixelGrid = document.getElementById('pixel-grid');

    pixelGrid.innerHTML = ''; // Limpa a grade existente
    pixelGrid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    pixelGrid.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;

    // Adiciona pixels à grade
    for (let i = 0; i < gridWidth * gridHeight; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;

        // Eventos para pintar ou apagar pixels
        pixel.addEventListener('mousedown', paintPixel);
        pixel.addEventListener('mouseover', paintPixelOnDrag);
        pixel.addEventListener('contextmenu', (e) => e.preventDefault()); // Desativa o menu de contexto

        pixelGrid.appendChild(pixel);
    }
}

// Define a cor do pixel com base no botão do mouse
function paintPixel(event) {
    event.preventDefault(); // Impede comportamento de bloqueio
    if (event.button === 0) event.target.style.backgroundColor = leftClickColor; // Botão esquerdo
    if (event.button === 1) event.target.style.backgroundColor = '#ffffff';      // Botão do meio
    if (event.button === 2) event.target.style.backgroundColor = rightClickColor; // Botão direito
}

// Permite arrastar e desenhar/apagar
function paintPixelOnDrag(event) {
    if (isMouseDown && event.buttons !== 0) { // Verifica se o mouse está pressionado
        if (event.buttons === 1) event.target.style.backgroundColor = leftClickColor; // Arrasto com botão esquerdo
        if (event.buttons === 4) event.target.style.backgroundColor = '#ffffff';      // Arrasto com botão do meio
        if (event.buttons === 2) event.target.style.backgroundColor = rightClickColor; // Arrasto com botão direito
    }
}

// Gerencia o estado de clique do mouse
document.addEventListener('mousedown', (e) => {
    isMouseDown = true; // Indica que o mouse está pressionado
    if (e.button === 1) e.preventDefault(); // Impede a rolagem ao clicar com o botão do meio
});
document.addEventListener('mouseup', () => isMouseDown = false); // Indica que o mouse foi liberado

// Limpa a grade
function resetGrid() {
    document.querySelectorAll('.pixel').forEach(pixel => {
        pixel.style.backgroundColor = '#ffffff';
    });
}

// Fecha a seção de instruções (opcional)
function closeInstructions() {
    document.getElementById('instructions').style.display = 'none';
}

// Inicializa a grade na carga da página
document.addEventListener('DOMContentLoaded', createGrid);

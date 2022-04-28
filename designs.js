// Select color input
const colorInput = document.getElementById("colorPicker");
// Select size input
const widthInput = document.getElementById("inputWidth"); //td
const heightInput = document.getElementById("inputHeight"); //tr
const pixelCanvas = document.getElementById("pixelCanvas");

const formSubmit = document.getElementById("sizePicker");

function makeGrid() {
    for (let row = 0; row < heightInput.value; row++) {
        const createRow = pixelCanvas.insertRow(-1);
        for (let column = 0; column < widthInput.value; column++) {
            const createColumn = createRow.insertCell(-1);
            createColumn.addEventListener("mousedown", () => {
                createColumn.style.backgroundColor = colorInput.value;
            });
        }
    }
}

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    makeGrid();
});
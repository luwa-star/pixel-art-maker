// Select color input
const colorInput = document.getElementById("colorPicker");
// Select size width input === <td></td>
const widthInput = document.getElementById("inputWidth"); //td
// Select size height input === <tr></tr>
const heightInput = document.getElementById("inputHeight"); //tr
// Select table
const pixelCanvas = document.getElementById("pixelCanvas");
// Select the form
const formSubmit = document.getElementById("sizePicker");

formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const widthInput = document.getElementById("inputWidth").value;
    const heightInput = document.getElementById("inputHeight").value;
    makeGrid(heightInput, widthInput);

    //to  access the child node of <table></table> which returns  HTMLCollection
    for (let i = 0; i < pixelCanvas.lastElementChild.children.length; i++) {
        // to access the children of <tr></tr> which returns and HTMLCollection
        for (
            let j = 0; j < pixelCanvas.lastElementChild.children[i].children.length; j++
        ) {
            const add = pixelCanvas.lastElementChild.children[i].children[j];
            add.style.removeProperty("background-color");
        }
    }
});

function makeGrid(heightInput, widthInput) {
    pixelCanvas.innerHTML = "";
    for (let row = 0; row < heightInput; row++) {
        const createRow = pixelCanvas.insertRow(-1);
        for (let column = 0; column < widthInput; column++) {
            const createColumn = createRow.insertCell(-1);
            createColumn.addEventListener("mousedown", () => {
                createColumn.style.backgroundColor = colorInput.value;
            });
        }
    }
}

const genBtn = document.getElementById("genBtn");
const resetBtn = document.getElementById("resetBtn");
const title = document.getElementById("title");
const colorBox = document.getElementById("colorBox");


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


genBtn.addEventListener("click", () => {
    const newColor = getRandomColor();
    title.innerText = newColor;
    colorBox.style.backgroundColor = newColor;
});


resetBtn.addEventListener("click", () => {
    title.innerText = "RGB Generator";
    colorBox.style.backgroundColor = "white";
});

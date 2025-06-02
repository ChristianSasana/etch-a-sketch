const container = document.querySelector("#container");
function createGrid() {
    for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j < 4; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
}
}

document.addEventListener("DOMContentLoaded", (event) => {
    createGrid();
})
const row = document.querySelector(".row");
const column = document.querySelector(".column");

row.addEventListener("mouseover", function() {
    row.setAttribute("style", "background: black");
    console.log("click");
});

column.addEventListener("click", function() {
    column.setAttribute("style", "background: black");
    console.log("click");
});

const btn4 = document.querySelector("#btn4");
const btn8 = document.querySelector("#btn8");
const btn16 = document.querySelector("#btn16");
const btn32 = document.querySelector("#btn32");

btn4.addEventListener("click", function() {
    document.getElementById(container).innerHTML = " ";
    for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j < 4; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
}
});

btn8.addEventListener("click", function() {
    document.getElementById(container).innerHTML = " ";
    for (let i = 0; i < 7; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j < 8; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
}
});

btn16.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j < 4; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
}
});

btn32.addEventListener("click", function() {
    for (let i = 0; i < 7; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j < 8; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
}
});

function clearGrid() {
    document.getElementById(container).innerHTML = " ";
}
const container = document.querySelector("#container");
function createGrid() {
    for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j < 16; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
    }
    
}

document.addEventListener("DOMContentLoaded", (event) => {
    createGrid();

    const rows = document.querySelectorAll(".row")
    rows.forEach((row) => {
        const column = row.querySelectorAll(".column");
        column.forEach((col) => {
        col.addEventListener("mouseover", function() {
            col.setAttribute("style", "background: black");
            console.log("click");
        });
        });
    })
})


// const btn4 = document.querySelector("#btn4");
// const btn8 = document.querySelector("#btn8");
// const btn16 = document.querySelector("#btn16");
// const btn32 = document.querySelector("#btn32");

function firstButton() {
    for (let i = 0; i < 32; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j < 32; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
    }
}


// btn8.addEventListener("click", function() {
//     //document.getElementById(container).innerHTML = " ";
//     for (let i = 0; i < 32; i++) {
//     const row = document.createElement("div");
//     row.classList.add("row");
//     container.appendChild(row);
//     for(let j = 0; j < 32; j++) {
//         const column = document.createElement("div");
//         column.classList.add("column");
//         row.appendChild(column);
//     }
//     }
// });

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

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function() {
    const rows = document.querySelectorAll(".row")
    rows.forEach((row) => {
        const column = row.querySelectorAll(".column");
        column.forEach((col) => {
            col.setAttribute("style", "background: none");
        
        });
    })
})


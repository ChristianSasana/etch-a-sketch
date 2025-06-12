const container = document.querySelector("#container");
const btn4 = document.querySelector("#btn4");
const btn8 = document.querySelector("#btn8");
const btn16 = document.querySelector("#btn16");
const btn32 = document.querySelector("#btn32");
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
function removeGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove()
        const column = row.querySelectorAll(".column");
        column.forEach((col) => {
            col.remove();
        })
    })
      
}

function etchGrid() {
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
}

document.addEventListener("DOMContentLoaded", (event) => {
    createGrid();
    etchGrid();
    btn4.addEventListener("click", function(){
        removeGrid();
        for (let i = 0; i < 16; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
            for (let j = 0; j < 16; j++) {
                const column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
            }
        }
    etchGrid();
    })
    btn8.addEventListener("click", function() {
        removeGrid();
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
    etchGrid();
    });
    btn16.addEventListener("click", function() {
        removeGrid();
        for (let i = 0; i < 64; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
            for (let j = 0; j < 32; j++) {
                const column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
            }
        }
        etchGrid();
    })
    btn32.addEventListener("click", function() {
        removeGrid();
        for (let i = 0; i < 128; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            container.appendChild(row);
            for (let j = 0; j < 128; j++) {
                const column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
            }
        }
        etchGrid();
    })
   
})

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


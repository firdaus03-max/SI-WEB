const warnaList = [
"#f44336","#ff9800","#ffeb3b","#4caf50","#2196f3",
"#9c27b0","#e91e63","#795548","#000000","#ffffff",
"#c62828","#ef6c00","#f9a825","#2e7d32","#1565c0"
];

const modal = document.getElementById("modal");
const colorGrid = document.getElementById("colorGrid");
const bgBox = document.getElementById("bgBox");
const textBox = document.getElementById("textBox");
const selectBtn = document.getElementById("selectBtn");
const cancelBtn = document.getElementById("cancelBtn");
const btnSimpan = document.getElementById("btnSimpan");

let selectedColor = "";
let targetBox = null;

/* Generate warna di modal */
warnaList.forEach(warna=>{
    const div = document.createElement("div");
    div.className = "color-option";
    div.style.background = warna;

    div.onclick = ()=>{
        document.querySelectorAll(".color-option")
            .forEach(el=>el.classList.remove("selected"));

        div.classList.add("selected");
        selectedColor = warna;
    };

    colorGrid.appendChild(div);
});

/* Buka modal */
bgBox.onclick = ()=>{
    targetBox = bgBox;
    modal.style.display="flex";
};

textBox.onclick = ()=>{
    targetBox = textBox;
    modal.style.display="flex";
};

/* Cancel */
cancelBtn.onclick = ()=>{
    modal.style.display="none";
};

/* Select */
selectBtn.onclick = ()=>{
    if(selectedColor && targetBox){
        targetBox.style.background = selectedColor;
    }
    modal.style.display="none";
};

/* Simpan */
btnSimpan.onclick = ()=>{
    const bgColor = bgBox.style.background;
    const textColor = textBox.style.background;

    if(bgColor){
        document.body.style.background = bgColor;
    }

    if(textColor){
        document.body.style.color = textColor;
    }
};
// On créer une div pour contenir la grille


const container = document.createElement("div");
container.classList.add("containerElement");
const invaderElement = document.querySelector("#invader");
invaderElement.appendChild(container);
console.log(container);
let selectedColor ="black";


//  On souhaite créer une grille de 8 * 8, on créer une boucle qui crée une colonne (row) et qui y ajoute 8 cellules("pixels")
//  On répète l'opération 8 fois.
function creationGrid (inputSizeGridValue,inputSizePixelValue) {
    container.innerHTML="";

    for ( let i = 0; i < inputSizeGridValue; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        
        // 2ème boucle qui va créer les cellules les"pixels"
        
        for(let j = 0; j < inputSizeGridValue; j++) {
            const pixelElement = document.createElement("div");
            row.appendChild(pixelElement);
            pixelElement.classList.add("pixel");
         
            pixelElement.style=`width :${inputSizePixelValue}px`;
        };
    }  
}
    // changement de la couleur du pixel au clic
    // On sélectionne tous les pixel par "queryselectorAll", Puis on rajoute un addEventListener sur tous les éléments du tableau via la boucle for of
function colorPixel() {

    const pixels = document.querySelectorAll(".pixel");
    for( const pix of pixels) {
        pix.addEventListener("clic", (event) =>{
            console.log(event);
         
         pix.classList.toggle(selectedColor)
 
 
    
            // pixel.classList.add("white");
        })
    }
}
colorPixel();

//  On récupère la valeur de l'input

const inputSizeGrid = document.querySelector("#gridSize");
const btn           = document.querySelector("#btn");
const inputSizePixel = document.querySelector("#pixelSize");

btn.addEventListener("click", (event) => {
    event.preventDefault();
let inputSizeGridValue = inputSizeGrid.value;
let inputSizePixelValue =inputSizePixel.value;
inputSizeGridValue = inputSizeGridValue || 12;
inputSizePixelValue= inputSizePixelValue || 35;
if (inputSizeGridValue > 12) {
    alert("Choissisez un nombre entre 1 et 12")
};
if (inputSizePixelValue > 35) {
    alert("Choisssissez un nombre entre 1 et 35 svp!")
}

console.log(inputSizePixelValue)
console.log(inputSizeGridValue);
creationGrid(inputSizeGridValue,inputSizePixelValue);
colorPixel();

});


// On va sélectionner toutes les class ayant la spécifité color par querySelectorAll, 
// On va poser un addEventListener sur toutes color via une boucle for Of
// A chaque fois que l'on cliquera sur l'id correspondant à al couleur on récuperera cette couleur
 function setupColorPicker() {
    const colors = document.querySelectorAll(".color");
    for(colorElement of colors ) {
        colorElement.addEventListener("click", (event) => {
            const selectColorId = event.target.id;
             selectedColor = selectColorId;
        })
    }
 }

setupColorPicker();




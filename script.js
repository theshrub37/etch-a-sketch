function createGrid (dimension, trailColor){
    const mainDiv = document.createElement('div')
    mainDiv.id = "mainDiv"

    for(let i = 0; i < dimension; i++){
        const rowDiv = document.createElement('div')
        rowDiv.classList.add("rowDiv")
        for(let j=0; j < dimension; j++){
            const borderDiv = document.createElement('div')
            borderDiv.classList.add("borderDiv")
            const gridDiv = document.createElement('div')
            gridDiv.style.opacity = 0;
            gridDiv.addEventListener('mouseover', function () {
                gridDiv.style.backgroundColor = trailColor
                gridDiv.style.opacity = parseFloat(gridDiv.style.opacity) + 0.1;
            })
            gridDiv.classList.add("gridDiv")
            gridDiv.style.width = "30px"
            gridDiv.style.height = "30px"
            borderDiv.style.width = "30px"
            borderDiv.style.height = "30px"
            borderDiv.appendChild(gridDiv)
            rowDiv.appendChild(borderDiv)
        }
        mainDiv.appendChild(rowDiv)
    }
    document.body.appendChild(mainDiv)
}
createGrid(16, "black")

const button = document.querySelector("button")
button.addEventListener('click', function(){
    document.querySelector("#mainDiv").remove()
    let size = prompt("Enter the new grid size: ")
    const colorPicker = document.querySelector("input[type='color']")
    createGrid(size, colorPicker.value)
})


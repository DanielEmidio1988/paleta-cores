const btnGenerate = document.querySelector('#generate-button')
const colorsDiv = document.querySelector('.colors')
const qtdColors = document.querySelector('#qtd_colors')

function generateColors(){
    colorsDiv.innerHTML = ''
    let qtdColorsValue = qtdColors.value
    const defaultQtdColors = 5

    if(!qtdColorsValue){
        qtdColorsValue = defaultQtdColors
    }

    for(let i=0; i < qtdColorsValue; i++){
        const color = generateRandomColor()
        const boxColor = document.createElement('div')
        const nameColor = document.createElement('p')
        boxColor.style.backgroundColor = color  
        nameColor.textContent = color
        nameColor.style.color = color
        colorsDiv.appendChild(boxColor)
        boxColor.appendChild(nameColor)  
    }

    
    
}

function generateRandomColor(){
    
    const lengthCodeColor = 6
    const randomLetters = "0123456789ABCDEF"
    let codeColor = '#'
    for(let i=0; i < lengthCodeColor; i++){
        codeColor += randomLetters[Math.floor(Math.random() * 16)]
    }

    return codeColor
}

btnGenerate.addEventListener('click', generateColors)
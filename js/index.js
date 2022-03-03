// declaring variables

const body = document.querySelector("body")
const hex_color = document.querySelector("span")
const btn = document.querySelector(".btn")


const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

//console log variables
console.log(body)
console.log(hex_color)
console.log(btn)





// declaring function






function colorChanger(){
    

    hex_color.textContent = "#"
    for( var i=0; i < 6; i++ ){

        // get number from 0-1 wher 1 excluded
        const randomNumber = Math.random()
        // colors.length is 16 but last number not included to our hex color
        const randomNumberTo15 = randomNumber * colors.length

        const floorRN = Math.floor(randomNumberTo15)


    // console.log(randomNumber)
    // console.log(randomNumberTo15)
    // console.log(floorRN)


        hex_color.textContent +=  colors[floorRN]
        
    }

        // console.log(hex_color.textContent)

   body.style.backgroundColor = hex_color.textContent
}


btn.addEventListener("click", colorChanger )








  
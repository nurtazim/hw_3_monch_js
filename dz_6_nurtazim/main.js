// includes js


// function F {
//     console.log(ingredient.innerText.length)
//     const id = parseInt(index);
//     let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
//     let key = ["", "DE", "ES", "FR", "IT", "ZH-HANS", "ZH-HANT"]
//     if (id_element === id) {
//         for (let i = 0; i < num.length; i++) {
//             const strIngredient = "strIngredient"
//             const strMeasure = "strMeasure"
//             const strInstruction = "strInstructions"
//             if (element[strMeasure + num[i]] !== null && element[strIngredient + num[i]] !== null && element[strInstruction + key[i]] !== null) {
//                 const ingredients = document.getElementById("ingredients")
//                 const ingredient = document.createElement("div")
//                 const imageingredients = document.createElement("img")
//                 const hr = document.createElement("hr")
//                 imageingredients.setAttribute("src", "https://www.thecocktaildb.com/images/ingredients/" + element[strIngredient + num[i]] + ".png")
//                 imageingredients.style.width = "100px"
//                 ingredients.append(ingredient)
//                 ingredients.append(imageingredients)
//                 ingredient.innerText = element[strIngredient + num[i]] + "-" + element[strMeasure + num[i]]
//                 const instructions = document.getElementById("instructions")
//                 const instruction = document.createElement("div")
//                 instructions.append(instruction)
//                 instruction.innerText = element[strInstruction + key[i]]
//                 instruction.append(hr)
//                 console.log(ingredient.innerText)
//             }
//         }
//     }
// }
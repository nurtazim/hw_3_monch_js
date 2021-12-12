// const text = document.getElementsByTagName("div")
//     text[0].before(text[2])
//     text[1].before(text[4])
//     text[2].before(text[3])
//     text[3].before(text[5])
//     text[4].before(text[5])
// for (let i = 0; i <text.length ; i++) {
//     console.log(text[i])
// }
//
// второе задание я вам сделал на занятии


const ul = document.getElementById("todo-list");
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li")
    ul.appendChild(li)
    li.setAttribute('class', 'task')
    li.append(tasks[i])
}

document.querySelectorAll('p').forEach((elem) => {
    elem.insertAdjacentHTML('afterend', '<hr/>');
});



const div_new = document.createElement("div")
const div_product = document.getElementById("cart-items")
div_product.appendChild(div_new)
div_new.setAttribute("class", "item")
div_new.append("Canned Fish")
const span = document.createElement("span")
div_new.append(span)
span.setAttribute("class", "qty1")
span.append("x 4")





const div =document.getElementsByClassName("item")
const div_only= div[4]
const parentDiv = div_only.parentNode;

parentDiv.replaceChild(div_new,div_only  )


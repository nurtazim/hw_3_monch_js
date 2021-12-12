const new_list = document.getElementById("id_main")

const butt = document.getElementById("butt")
input = document.getElementById("input_id")
input.value = localStorage.getItem("input");
input.value = null
butt.onclick = function () {
    const val = document.getElementById('input_id').value;
    const li = document.createElement("li")
    li.setAttribute('class', 'tdItem')
    li.append(val)
    new_list.appendChild(li)
    document.getElementById('input_id').value = null;
};
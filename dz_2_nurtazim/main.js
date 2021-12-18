const butt = document.getElementById("add-item-btn")

butt.onclick = function () {
    const container = document.getElementById('container');
    const div = document.createElement("div")
    div.setAttribute('class', 'element')
    container.append(div)
    div.append("Element")
};


const start = document.getElementById("start")
const stop = document.getElementById("stop")
const container2 = document.getElementById('container2');


function Start() {
    const num = Math.floor(Math.random() * 20)
    const div = document.createElement("div")
    div.setAttribute('class', 'element')
    container2.append(div)
    div.append(num)
}


start.onclick = function () {
    set = setInterval(Start, 500)
    stop.onclick = function () {
        clearInterval(set)
    }
}


const start = document.getElementById("start")
const pause = document.getElementById("pause")
const reset = document.getElementById("reset")


let second = 0;
let value = 1;
let minute = 0
let hours = 0
let timer = null

start.onclick = function () {
    timer = setInterval(function () {
        const div = document.getElementById("div_only")
        const seconds = document.getElementById("seconds");
        const span = document.createElement("span")
        div.appendChild(span)
        span.setAttribute('id', 'seconds')
        second += value;
        if (second === 60) {
            second = 0
            minute += value
            const minutes = document.getElementById("minutes");
            const span_minutes = document.createElement("span")
            div.appendChild(span_minutes)
            span_minutes.setAttribute('id', 'minutes')
            if (minute >= 0 && minute <= 9) {
                span_minutes.append("0" + minute)
            } else {
                span_minutes.append(minute)
            }
            const parentSpanMinutes = span_minutes.parentNode;
            parentSpanMinutes.replaceChild(span_minutes, minutes)
            if (minute === 60) {
                minute = 0
                hours += value
                const hourse = document.getElementById("hours")
                const span_hours = document.createElement("span")
                div.appendChild(span_hours)
                span_hours.setAttribute("id", "hours")
                if (hours >= 0 && hours <= 9) {
                    span_hours.append("0" + hours)
                }
                else if (hours===24){
                    hours=0
                }
                else {
                    span_hours.append(hours)
                }
                const parentSpanHours = span_hours.parentNode;
                parentSpanHours.replaceChild(span_hours, hourse)
            }
        }
        if (second >= 0 && second <= 9) {
            span.append("0" + second)
        } else {
            span.append(second)
        }
        const parentSpan = span.parentNode;
        parentSpan.replaceChild(span, seconds)
    }, 1)
}



pause.onclick = function stopInterval() {
    clearInterval(timer);
}

reset.onclick = function () {
    const div = document.getElementById("div_only")
    const seconds = document.getElementById("seconds");
    const span = document.createElement("span")
    div.appendChild(span)
    span.setAttribute('id', 'seconds')
    span.append("00")
    const parentSpan = span.parentNode;
    second = 0

    parentSpan.replaceChild(span, seconds)


    const minutes = document.getElementById("minutes");
    const span_minutes = document.createElement("span")
    div.appendChild(span_minutes)
    span_minutes.setAttribute('id', 'minutes')
    span_minutes.append("00")
    const parentSpanMinutes = span_minutes.parentNode;
    minute = 0
    parentSpanMinutes.replaceChild(span_minutes, minutes)

    clearInterval(timer);


    const hourse = document.getElementById("hours")
    const span_hours = document.createElement("span")
    div.appendChild(span_hours)
    span_hours.setAttribute("id", "hours")
    span_hours.append("00")
    const parentSpanHours = span_hours.parentNode;
    hours = 0
    parentSpanHours.replaceChild(span_hours, hourse)
    clearInterval(timer);
}




const form = document.forms[0],
    btn = form.lastElementChild;
form.addEventListener("change", form_change);
form.addEventListener("submit", form_submit);

function form_change() {
    btn.disabled = form.username.value.length < 6
        || form.password.value.length < 6;
}

function form_submit(event) {
    event.preventDefault();

}

submitoch=document.getElementById("submit")
submitoch.onclick=function (){
    alert(`Ваше Имя:${form.username.value}\nВаш пароль: ${form.password.value}`)
}
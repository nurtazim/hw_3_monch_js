const solidColor = document.getElementById('solidColor');
const alphaColor = document.getElementById('alphaColor');
const solidWeighted = document.getElementById('solidWeighted');

const solidColorCode = document.getElementById('solidColorCode');
const alphaColorCode = document.getElementById('alphaColorCode');
const solidWeightedCode = document.getElementById('solidWeightedCode');


const brush = document.getElementById('brush');




const image = document.getElementById('image');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const width = image.width;
const height = image.height;

const BRUSH_SIZE = brush.offsetWidth;
const BRUSH_CENTER = BRUSH_SIZE / 2;
const MIN_X = image.offsetLeft + 4;
const MAX_X = MIN_X + width - 1;
const MIN_Y = image.offsetTop + 4;
const MAX_Y = MIN_Y + height - 1;

canvas.width = width;
canvas.height = height;

context.drawImage(image, 0, 0, width, height);

const imageDataData = context.getImageData(0, 0, width, height).data;

let gorizont = 700;
let vertical = 330;
let value = 1;
let timer = null
const test = document.getElementById("test")


const start = document.getElementById("start")
start.onclick = timer = function () {
    timer = setInterval(function () {
        gorizont += value
        if (gorizont === 850) {
            vertical += value
            gorizont = 700
        }
        test.innerText = gorizont
        console.log(vertical)
        brush.style.transform = `translate(${gorizont}px, ${vertical}px)`;
    }, 1)
}


function sampleColor(clientX, clientY) {

    if (clientX < MIN_X || clientX > MAX_X || clientY < MIN_Y || clientY > MAX_Y) {
        requestAnimationFrame(() => {
            brush.style.transform = `translate(${clientX}px, ${clientY}px)`;
            solidColorCode.innerText = solidColor.style.background = 'rgb(0, 0, 0)';
            alphaColorCode.innerText = alphaColor.style.background = 'rgba(0, 0, 0, 0.00)';
            solidWeightedCode.innerText = solidWeighted.style.background = 'rgb(0, 0, 0)';
        });
        return;
    }

    const imageX = clientX - MIN_X;
    const imageY = clientY - MIN_Y;


    console.log(imageX)
    console.log(imageY)

    const i = (imageY * width + imageX) * 4;

    // A single pixel (R, G, B, A) will take 4 positions in the array:
    const R = imageDataData[i];
    const G = imageDataData[i + 1];
    const B = imageDataData[i + 2];
    const A = imageDataData[i + 3] / 255;
    const iA = 1 - A;

    // Alpha-weighted color:
    const wR = (R * A + 255 * iA) | 0;
    const wG = (G * A + 255 * iA) | 0;
    const wB = (B * A + 255 * iA) | 0;

    // console.log(imageDataData)
    // console.log(R)
    // console.log(G)
    // console.log(B)
    // console.log(A)
    // console.log(wR)
    // console.log(wG)
    // console.log(wB)


    // Update UI:

    requestAnimationFrame(() => {
        brush.style.transform = `translate(${clientX}px, ${clientY}px)`;
        solidColorCode.innerText = solidColor.style.background
            = `rgb(${R}, ${G}, ${B})`;
        alphaColorCode.innerText = alphaColor.style.background
            = `rgba(${R}, ${G}, ${B}, ${A.toFixed(2)})`;
        solidWeightedCode.innerText = solidWeighted.style.background
            = `rgb(${wR}, ${wG}, ${wB})`;


        const elements = document.getElementById("elements")
        const img_color = document.createElement("span")
        img_color.setAttribute("class", "sample_now")
        img_color.setAttribute("id", "solidColor")
        const coll = solidWeighted.style.background = `rgb(${wR}, ${wG}, ${wB})`
        img_color.setAttribute("style", `background:${coll}`)
        elements.append(img_color)
    });
}


function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        clientX: box.top + window.pageYOffset,
        clientY: box.right + window.pageXOffset
    };
}

const x = getCoords(brush)

//
// sampleColor(x.clientX, x.clientY);


// const imageX = gorizont - MIN_X;
// const imageY = vertical - MIN_Y;
//
// const i = (imageY * width + imageX) * 4;
//
// // A single pixel (R, G, B, A) will take 4 positions in the array:
// const R = imageDataData[i];
// const G = imageDataData[i + 1];
// const B = imageDataData[i + 2];
// const A = imageDataData[i + 3] / 255;
// const iA = 1 - A;
//
// // Alpha-weighted color:
// const wR = (R * A + 255 * iA) | 0;
// const wG = (G * A + 255 * iA) | 0;
// const wB = (B * A + 255 * iA) | 0;


document.onmousemove=(e)=>sampleColor(e.clientX,e.clientY)
// setInterval(()=> {sampleColor(gorizont,vertical) }, 1000)
//
// console.log(x.clientY)



// sampleColor(670 , 170)





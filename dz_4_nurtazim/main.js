// function Main () {
//     fetch('https://restcountries.com/v3.1/name/kyrgyzstan').then((data) => {
//         data.json().then(response => {
//             response.forEach(element => {
//                 const name = document.getElementById("name")
//                 const span_name = document.createElement("span")
//                 body.appendChild(span_name)
//                 span_name.setAttribute("id", "name")
//                 span_name.append(element["name"]["common"])
//                 const parentSpanName = span_name.parentNode;
//                 parentSpanName.replaceChild(span_name, name)
//             }}
//

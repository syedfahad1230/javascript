// const head = document.querySelector("#head-one");
// const head = document.getElementById("head");
// const head = document.getElementsByClassName("head");
// const head = document.getElementsByTagName("h1");
// const head = document.querySelectorAll("h1");
// console.log(head)

// console.log(document.childNodes[1].childNodes[2].childNodes[3].nodeType)
// console.log(document.childNodes[1].childNodes[2].childNodes[3].childNodes[0].nodeType

// const ul = document.getElementById("ul")
//  console.log(ul.lastChild.nodeName)

const div = document.querySelector("div");

// div.innerHTML = `
//  <h1>hello world</h1>
//  <ul>
//  <li>hpme</li>
//   <li>contct</li>
//    <li>about</li>
//    </ul>
//  `

 let h1 = document.createElement("H1");
let h1Text = document.createTextNode("hello world");
h1.appendChild(h1Text);
div.appendChild(h1)
console.log(h1);

let ul = document.createElement("Ul");
let ulText = document.createTextNode(`<li>home</li><li>contct</li><li>about</li>`);
ul.appendChild(ulText);
div.appendChild(ul)
console.log(ul);
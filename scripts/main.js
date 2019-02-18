/*
HTML DOM elements manipulation with Javascript.
NO elements have been added to the HTML file, except for the initial structure
and elements to act on.
*/

// Initial selection of parent nodes & element creation
const parentDiv = document.querySelector('#container');
const newP = document.createElement('p');
const newH3 = document.createElement('h3');
const newDiv = document.createElement('div');
const subH1 = document.createElement('h1');
const subP = document.createElement('p');

// Addition of new elements to DOM
newP.textContent = 'Hey I\'m red!'
newP.setAttribute('style', 'color: red;')
parentDiv.appendChild(newP);

newH3.textContent = 'I\'m a blue h3'
newH3.setAttribute('style', 'color: blue;')
parentDiv.appendChild(newH3);

// Create new div class - 'sub-div' and append h1 and p elements inside it
newDiv.setAttribute('style', 'background-color: pink; border:1px solid black');

subH1.textContent = 'I\'m in a div!';
subH1.setAttribute('style', '');
newDiv.appendChild(subH1);

subP.textContent = 'Me too!';
newDiv.appendChild(subP);

parentDiv.appendChild(newDiv);

// Event Listeners

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert('Hello World - addEventListener method')
});

let btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World - btn.onclick method');

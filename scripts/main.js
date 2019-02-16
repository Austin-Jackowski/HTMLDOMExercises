/*
HTML DOM elements manipulation with Javascript.
NO elements have been added to the HTML file, except for the initial structure
and elements to act on.
*/

// Initial selection of parent nodes
const parentDiv = document.querySelector('.container');
const newP = document.createElement('p');
const newH3 = document.createElement('h3');
const newDiv = document.createElement('div');
const subDiv = document.querySelector('.sub-div');
const subH1 = document.createElement('h1');
const subP = document.createElement('p');

// Addition of new elements to DOM
newP.textContent = 'Hey I\'m red!'
newP.setAttribute('style', 'color: red;')
parentDiv.appendChild(newP);

newH3.textContent = 'I\'m a blue h3'
newH3.setAttribute('style', 'color: blue;')
parentDiv.appendChild(newH3);

newDiv.classList.add('sub-div');
newDiv.setAttribute('style', 'background-color: pink; border:1px solid black');
parentdiv.appendChild(newDiv);

subH1.textContent = 'I\'m in a div!';
subH1.setAttribute('style', '');
subDiv.appendChild(subH1);

subP.textContent = 'Me too!';
subDiv.appendChild(subP);

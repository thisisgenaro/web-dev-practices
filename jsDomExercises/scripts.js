
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

/*

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = "red";
content.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
content.appendChild(blueH3);

const newDiv = document.createElement('div');
const divH1 = document.createElement('h1');
const divP = document.createElement('p');

newDiv.style.cssText = "background:pink; border-style:solid;";

divH1.textContent = "I'm in a div";
divP.textContent = "ME TOO!";

newDiv.appendChild(divH1);
newDiv.appendChild(divP);

container.appendChild(newDiv);


import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './js.gif';


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = myName('Jaspreet singh');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
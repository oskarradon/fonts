import {fonts} from './fonts.js';
import {colors} from './colors.js';

function changeColor(c) {
  let main  = document.getElementsByTagName('main')[0],
      body  = document.getElementsByTagName('body')[0];

  body.style.backgroundColor = c.bg;
  main.style.color = c.font;
}

function changeFont(f) {
  let h1        = document.getElementById('text'),
      name      = document.getElementById('name'),
      designers = document.getElementById('designers'),
      foundry   = document.getElementById('foundry'),
      year      = document.getElementById('year'),
      src       = document.getElementById('source');
  // clear "size" class
  if (h1.classList[0]) {
    h1.classList.remove(h1.classList[0]);
  }

  h1.style.fontFamily = f.name.replace(/\s/g,'') + f.modifier.replace(/\s/g,'');
  name.innerHTML = f.name + " " + f.modifier;
  designers.innerHTML = f.designers;
  year.innerHTML = f.year;
  src.href = "../fonts/assets/zip/" + f.name.replace(/\s/g,'') + ".zip";
  // add "size" class
  if (f.size) {
    h1.classList.add(f.size);
  }
}

function updateUI(i, j) {
  changeFont(fonts[i]);
  changeColor(colors[j]);
}

document.addEventListener("DOMContentLoaded", function() {
  // generate starting indices
  let f = Math.floor(Math.random() * fonts.length),
      c = Math.floor(Math.random() * colors.length);
  updateUI(f, c);
  prevButton(f, c);
  nextButton(f, c);
});

function getNextIndex (index, array) {
  return (index + 1) % array.length
}

function getPreviousIndex (index, array) {
  return index <= 0 ? array.length - 1 : index - 1
}

function prevButton (x, y) {
  document.getElementById('prev').onclick = function() {
    x = getPreviousIndex(x, fonts);
    y = getPreviousIndex(y, colors);
    updateUI(x, y);
    nextButton(x, y);
  }
}

function nextButton (x, y) {
  document.getElementById('next').onclick = function() {
    x = getNextIndex(x, fonts);
    y = getNextIndex(y, colors);
    updateUI(x, y);
    prevButton(x, y);
  }
}

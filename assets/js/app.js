// array of colors

let colors = [
  {
    "bg": "#dfffe5",
    "font": "#fe7f78"
  },
  {
    "bg": "#3c6cdf",
    "font": "#fe7f78"
  },
  {
    "bg": "#ffb3a1",
    "font": "#000"
  },
  {
    "bg": "#8da49d",
    "font": "#4663c6"
  }
]


// array of fonts

let fonts = [
  {
    "name": "Authentic Sans Condensed 60",
    "designers": "Christina Janus & Desmond Wong",
    "foundry": "Authentic",
    "source": "https://authentic.website/shop.html#sans",
    "year": "2015"
  }
]

function changeColor() {
  let main  = document.getElementsByTagName('main')[0],
      index = colors[Math.floor(Math.random() * colors.length)];
  main.style.backgroundColor = index.bg;
  main.style.color = index.font;
}

function changeFont() {
  let h1     = document.getElementById('text'),
      name   = document.getElementById('name'),
      source = document.getElementById('source'),
      index = fonts[Math.floor(Math.random() * fonts.length)];
  h1.style.fontFamily = index.name;
  h1.style.fontFamily = "Authentic Sans Condensed 60" // both not working why
  console.log(index.name)
}

function updateUI() {
  changeColor(colors);
  changeFont(fonts);
}

document.addEventListener("DOMContentLoaded", function(){
  updateUI();
});

// on page load
  // load random font
  // random bg and font color

// on button click
  // load random font
  // random bg and font color


// download zip file of font

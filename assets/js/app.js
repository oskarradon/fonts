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
  },
  {
    "bg": "#828abb",
    "font": "#5538b4"
  },
  {
    "bg": "#00469d",
    "font": "#fed767"
  }
]


// array of fonts

let fonts = [
  {
    "name": "Authentic Sans",
    "modifier": "Condensed 60",
    "designers": "Christina Janus & Desmond Wong",
    "foundry": "Authentic",
    "year": "2015"
  },
  {
    "name": "Authentic Sans",
    "modifier": "60",
    "designers": "Christina Janus & Desmond Wong",
    "foundry": "Authentic",
    "year": "2015"
  },
  {
    "name": "Stereo Sans",
    "modifier": "",
    "designers": "Joonas Timmi",
    "foundry": "SUVA Type Foundry",
    "year": "2017"
  },
  {
    "name": "Iosevka",
    "modifier": "Light Italic",
    "designers": "Belleve Invis",
    "foundry": "Typeof.net",
    "year": "2015"
  },
  {
    "name": "Glyph World",
    "modifier": "Flower",
    "designers": "Leah Maldonado",
    "foundry": "glyphworld.online",
    "year": "2019"
  },
  {
    "name": "Wreckage Grotesque",
    "modifier": "",
    "designers": "Rory King",
    "foundry": "rorykingetc.com",
    "year": "2018"
  },
  {
    "name": "Lunchtype 25",
    "modifier": "",
    "designers": "Steppot",
    "foundry": "lunchtype.com",
    "year": "2016"
  }
]

function changeColor() {
  let main  = document.getElementsByTagName('main')[0],
      body  = document.getElementsByTagName('body')[0],
      index = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = index.bg;
  main.style.color = index.font;
}

function changeFont() {
  let h1        = document.getElementById('text'),
      name      = document.getElementById('name'),
      designers = document.getElementById('designers'),
      foundry   = document.getElementById('foundry'),
      year      = document.getElementById('year'),
      src       = document.getElementById('source'),
      index     = fonts[Math.floor(Math.random() * fonts.length)];

  h1.style.fontFamily = index.name.replace(/\s/g,'') + index.modifier.replace(/\s/g,'');
  name.innerHTML = index.name + " " + index.modifier;
  designers.innerHTML = index.designers;
  year.innerHTML = index.year;
  src.href = "../fonts/assets/zip/" + index.name.replace(/\s/g,'') + ".zip";
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

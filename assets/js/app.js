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
  },
  {
    "name": "Apfel Grotezk",
    "modifier": "Brukt",
    "designers": "Luigi Gorlero",
    "foundry": "Collletttivo",
    "year": "2019"
  },
  {
    "name": "Kaeru Kaeru",
    "modifier": "",
    "designers": "Isabel Motz",
    "foundry": "Velvetyne",
    "year": "2019"
  },
  {
    "name": "Hershey Noailles",
    "modifier": "Astrology",
    "designers": "Allen Vincent Hershey",
    "foundry": "Luuse",
    "year": "1967"
  },
  {
    "name": "Work Sans",
    "modifier": "Black",
    "designers": "Wei Huang",
    "foundry": "Google Fonts",
    "year": "2015"
  },
  {
    "name": "Quaerite Regnum Dei",
    "modifier": "",
    "designers": " 	Fredrick Brennan",
    "foundry": "",
    "year": "2019"
  }
]

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

  h1.style.fontFamily = f.name.replace(/\s/g,'') + f.modifier.replace(/\s/g,'');
  name.innerHTML = f.name + " " + f.modifier;
  designers.innerHTML = f.designers;
  year.innerHTML = f.year;
  src.href = "../fonts/assets/zip/" + f.name.replace(/\s/g,'') + ".zip";
}

function updateUI(i, j) {
  changeFont(fonts[i]);
  changeColor(colors[j]);
}

document.addEventListener("DOMContentLoaded", function() {
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
  }
}

function nextButton (x, y) {
  document.getElementById('next').onclick = function() {
    x = getNextIndex(x, fonts);
    y = getNextIndex(y, colors);
    updateUI(x, y);
  }
}

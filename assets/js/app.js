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
  }
]

function changeColor(i) {
  let main  = document.getElementsByTagName('main')[0],
      body  = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = i.bg;
  main.style.color = i.font;
}

function changeFont(i) {
  let h1        = document.getElementById('text'),
      name      = document.getElementById('name'),
      designers = document.getElementById('designers'),
      foundry   = document.getElementById('foundry'),
      year      = document.getElementById('year'),
      src       = document.getElementById('source');

  h1.style.fontFamily = i.name.replace(/\s/g,'') + i.modifier.replace(/\s/g,'');
  name.innerHTML = i.name + " " + i.modifier;
  designers.innerHTML = i.designers;
  year.innerHTML = i.year;
  src.href = "../fonts/assets/zip/" + i.name.replace(/\s/g,'') + ".zip";
}

function updateUI() {
  let randomNumber = Math.floor(Math.random() * colors.length),
      count        = 0;
  count = (count + randomNumber) % colors.length;
  changeColor(colors[count]);
  changeFont(fonts[count]);
}

document.addEventListener("DOMContentLoaded", function(){
  updateUI();
});


const API_KEY = "Nws0rpOs4emEzL10p8NB2PupcGTTnQd7dqlcOetU";
//obtener info segun id

const request = new XMLHttpRequest();
const ids = new XMLHttpRequest();
const idsArray = [];

//constantes de html
const info = document.querySelector("#info");
const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const definition = document.querySelector("#definition");
const exampleTechnologies = document.querySelector("#exampleTechnologies")
const description = document.querySelector("#description")
const  statesWithWork = document.querySelector("#statesWithWork");
const startDateString = document.querySelector("#startDateString")
const lastUpdated = document.querySelector("#lastUpdated")
//añadiendo clases
title.classList.add("title");
subtitle.classList.add("subtitle")

function Buscar(id) {
  request.open(
    "GET",
    "https://api.nasa.gov/techport/api/projects/" + id + "?api_key=" + API_KEY,
    true
  );
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(this.response);
      title.innerHTML = data.project.title;
      subtitle.innerHTML = data.project.primaryTaxonomyNodes[0].title;
      definition.innerHTML = data.project.primaryTaxonomyNodes[0].definition;
      exampleTechnologies.innerHTML = "<p class='sub_title'>EXAMPLES:</p>"+ data.project.primaryTaxonomyNodes[0].exampleTechnologies;
      description.innerHTML = "<p class='sub_title'>DESCRIPTION: </p>" + data.project.description;
      statesWithWork.innerHTML = "<p class='sub_title'>Citys with work </p>"+ data.project.statesWithWork[0].name;
      startDateString.innerHTML = "<p class='sub_title'>Date start: </p>" + data.project.startDateString;
      lastUpdated.innerHTML = "<p class='sub_title'>Last update: </p>" + data.project.lastUpdated;
    } else {
      info.innerHTML = "Ha ocurrido un error con código " + request.status;
    }
  };
  request.send();
}

//obtener ids
ids.open(
  "GET",
  "https://api.nasa.gov/techport/api/projects?api_key=" + API_KEY,
  true
);
ids.onload = function () {
  if (ids.status >= 200 && ids.status < 400) {
    const dataIds = JSON.parse(this.response);
    for (var i = 0; i <= dataIds.totalCount; i++) {
      idsArray.push(dataIds.projects[i].projectId);
    }
  } else {
    ids_.innerHTML = "Ha ocurrido un error conc ódigo " + request.status;
  }
};
ids.send();
// numero aleatorio
function n() {
  var num = Math.floor(Math.random() * (12779 + 1 - 0) + 0);

  for (var i = 0; i <= 12779; i++) {
    var y = idsArray[num];
  }
  Buscar(y);
}


/*slider */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
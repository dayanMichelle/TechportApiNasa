const info = document.querySelector("#info");
const API_KEY = "Nws0rpOs4emEzL10p8NB2PupcGTTnQd7dqlcOetU";
const ids_ = document.querySelector("#ids");
//obtener info segun id
const request = new XMLHttpRequest();
const ids = new XMLHttpRequest();
const idsArray = [];

function Buscar(id) {
  request.open(
    "GET",
    "https://api.nasa.gov/techport/api/projects/"+id+"?api_key=" + API_KEY,
    true
  );
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(this.response);
      info.innerHTML = data.project.title;
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
var num = Math.floor(Math.random() * ((12779+1) - 0) + 0);
function n()
{for(var i = 0; i<=12779; i++){
  var y = idsArray[num]
}
  Buscar(y)
}

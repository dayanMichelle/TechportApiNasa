const info = document.querySelector("#info");
        const API_KEY = "Nws0rpOs4emEzL10p8NB2PupcGTTnQd7dqlcOetU";
        const request = new XMLHttpRequest();

        request.open(
          "GET",
          "https://api.nasa.gov/techport/api/projects/93071?api_key="+API_KEY,
          true
        );
        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
          const data = JSON.parse(this.response);

            info.innerHTML=(data.project.title);

          }else {
           info.innerHTML = ('Ha ocurrido un error conc ódigo ' + request.status);
           };
          }
        request.send();
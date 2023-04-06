

window.addEventListener("load", ()=>{
    cargarPeliculas()
})

let pagina = 1;

let btnAnterior = document.querySelector(".btnAnterior");
let btnSiguiente = document.querySelector(".btnSiguiente");

btnAnterior.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -=1;
    }
    cargarPeliculas()
})

btnSiguiente.addEventListener("click", ()=>{
    if(pagina <= 500){
        pagina += 1;
        cargarPeliculas()
    }else if(pagina > 500 || pagina < 1){
        console.log(error);
    }
})



let cargarPeliculas = async ()=>{
    try {
        let respuesta = await axios (`https://api.themoviedb.org/3/movie/popular?api_key=a464131ac038695514eb64460b034e70&language=es-MX&page=${pagina}`)
        if( respuesta.status === 200){
            let datos = await respuesta.data;
            let peliculas = "";
            datos.results.forEach((pelicula)=>{
            peliculas+=`<div class="pelicula">
                            <div class="card">
                                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"/>
                                <h3 class="titulo">${pelicula.title}</h3>
                                <button class="btnVer">Ver más</button>
                                <div class="text_oculto ocultar">${pelicula.overview}</div>
                            </div>
                        </div>`
            });
            document.querySelector(".contenedor").innerHTML = peliculas;
            let btnVer = document.querySelector(".btnVer");
            let descripcion = document.querySelector(".text_oculto");
            btnVer.addEventListener("click", ()=>{
              descripcion.classList.toggle("ocultar");})
          }
    } catch (error) {
        console.log(error);
    }
    document.querySelector(".nPagina").innerHTML = pagina
    document.querySelector(".pagina").innerHTML = `Página n° ${pagina}`
    
    
}
cargarPeliculas()

//Validación del formulario

function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
    return true;
  } else {
    return false;
  }
}

let form = document.querySelector("#form");
form.addEventListener("submit", btnEnviarForm);

async function btnEnviarForm(e) {
  e.preventDefault();
  let form = new FormData(this);
  let response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  let nombre = document.querySelector("#nameCliente").value;
  let apellido = document.querySelector("#lastName").value;
  let email = document.querySelector("#emailCliente").value;
  let textArea = document.querySelector("#textArea").value;

  if (nombre.length == 0 || nombre.length === "") {
    Toastify({
      text: "Debe ingresar su nombre",
      duration: 3000,
      destination: "index.html",
      newWindow: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#4267B3",
      },
    }).showToast();
    return;
  } else {
    if (apellido.length == 0 || nombre.length === "") {
      Toastify({
        text: "Debe ingresar su apellido",
        duration: 3000,
        destination: "index.html",
        newWindow: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#4267B3",
        },
      }).showToast();
      return;
    } else {
      if (email.length == 0 || email.length === "") {
        Toastify({
          text: "Debe ingresar su email",
          duration: 3000,
          destination: "index.html",
          newWindow: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#4267B3",
          },
        }).showToast();
        return;
        } else {
          if (textArea.length == 0 || nombre.length === "") {
            Toastify({
              text: "Debe ingresar un mensaje",
              duration: 3000,
              destination: "index.html",
              newWindow: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              style: {
                background: "#4267B3",
              },
            }).showToast();
            return;
          } else {
              Toastify({
                text: "Se envió correctamente",
                duration: 3000,
                destination: "index.html",
                newWindow: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "#4267B3",
                },
              }).showToast();
            }
          }
        }
      }
    }

  //Validación reclamo

  let formulario = document.querySelector(".reclamo_form");
  formulario.addEventListener("submit", btnSubmit);

async function btnSubmit(e) {
  e.preventDefault();
  let formulario = new FormData(this);
  let response = await fetch(this.action, {
    method: this.method,
    body: formulario,
    headers: {
      Accept: "application/json",
    },
  });

  let nombreR = document.querySelector("#nameClienteR").value;
  let apellidoR = document.querySelector("#lastNameR").value;
  let emailR = document.querySelector("#emailClienteR").value;
  let paisR = document.querySelector("#paisR").value;
  let textAreaR = document.querySelector("#textAreaR").value;

  if (nombreR.length == 0 || nombreR.length === "") {
    Toastify({
      text: "Debe ingresar su nombre",
      duration: 3000,
      destination: "index.html",
      newWindow: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#4267B3",
      },
    }).showToast();
    return;
  } else {
    if (apellidoR.length == 0 || nombreR.length === "") {
      Toastify({
        text: "Debe ingresar su apellido",
        duration: 3000,
        destination: "index.html",
        newWindow: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#4267B3",
        },
      }).showToast();
      return;
    } else {
      if (emailR.length == 0 || emailR.length === "") {
        Toastify({
          text: "Debe ingresar su email",
          duration: 3000,
          destination: "index.html",
          newWindow: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#4267B3",
          },
        }).showToast();
        return;
      } else {
        if (paisR.length == 0 || nombreR.length === "") {
          Toastify({
            text: "Debe ingresar su pais",
            duration: 3000,
            destination: "index.html",
            newWindow: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#4267B3",
            },
          }).showToast();
          return;
        } else {
          if (textAreaR.length == 0 || textAreaR.length === "") {
            Toastify({
              text: "Debe ingresar un mensaje",
              duration: 3000,
              destination: "index.html",
              newWindow: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              style: {
                background: "#4267B3",
              },
            }).showToast();
            return;
          } else {
              Toastify({
                text: "Se envió correctamente",
                duration: 3000,
                destination: "index.html",
                newWindow: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "#4267B3",
                },
              }).showToast();
            }
          }
        }
      }
    }
  }
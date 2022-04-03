let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let materia = document.getElementById("materia");
let boton = document.getElementById("btn-enviar");
let resultado = document.querySelector(".resultado");

let validarCampos=()=>{
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40){
        error[0]=true;
        error[1]="el nombre es invalido";
        return error;
    }
        else if(correo.value.length <5 || 
                correo.value.length >40 ||
                correo.value.indexOf("@")== -1 ||
                correo.value.indexOf(".")== -1){
                error[0]=true;
                error[1]="el correo es invalido ";
                return error;
        }
        else if(materia.value.length < 4 || materia.value.length > 40){
         error[0]=true;
         error[1]="la materia no existe";
         return error;
        }

        error[0]=false;
        return error;        
    }

boton.addEventListener("click",(e)=>{
  e.preventDefault();
  let error = validarCampos();

  if(error[0]){
     resultado.innerHTML=error[1];
     resultado.classList.add("red");
  }
  else{
      resultado.innerHTML = "solicitud enviada satisfactoriamente";
      resultado.classList.add("green");
      resultado.classList.remove("red");
  }
})


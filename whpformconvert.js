// Obtén el botón y el input
const boton = document.getElementById("ejecutarFuncion");
const input = document.getElementById("textwhpform");
const inputres = document.getElementById("resultado");
const textwhp = document.getElementById("textwhpform");
const result = document.getElementById("resultado");
const resoutreg = document.getElementById('idresout');
const jsondata = document.getElementById('idjsondata');


cmdlimpiar.addEventListener("click", () => {
  // Limpiar text
  textwhp.value = "";
  result.value = "";
  resoutreg.value="";
  jsondata.value="";
});


// Agrega un event listener al botón para que ejecute la función al hacer clic
boton.addEventListener("click", () => {
  const cadena = input.value;
  const resultado = miFuncion(cadena);
  //console.log(resultado);
  // Aquí puedes mostrar el resultado en un elemento HTML, por ejemplo:
  //document.getElementById('resultado').innerText = resultado;
  inputres.innerText = "" + resultado;
  //alert(resultado);
  inputres.value = resultado;
});

function eliminarCamposEspecificosSinRegex(cadena, camposAEliminar) {
  let resultado = cadena;
  let separador = "";

  // Iteramos sobre cada campo a eliminar
  for (let i = 0; i < camposAEliminar.length; i++) {
    if (i > 1) {
      separador = "|";
    }
    const campo = camposAEliminar[i];
    // Mientras encontremos el campo en la cadena, lo eliminamos
    while (resultado.indexOf(campo) !== -1) {
      resultado = resultado.replace(campo, separador);
    }
  }

  return resultado.trim();
}

function miFuncion(cadenaOriginal) {
  const camposAEliminar = [
    "*Plantilla de contacto*",
    "*Respuesta* #",
    "*Nombre :*",
    "*Correo electrónico :*",
    "*Whatsapp :*",
    "*Preferencias :*",
    "*Observaciones :*",
  ];

  const cadenaProcesada = eliminarCamposEspecificosSinRegex(
    cadenaOriginal,
    camposAEliminar
  );

  const { resultadoFinal, resultadosIntermedios } =
    eliminarCamposEspecificosSinRegexYAlmacenar(
      cadenaOriginal,
      camposAEliminar
    );
  // Utilizar resultadoFinal
  console.log("Resultado final:", resultadoFinal);

  return "" + cadenaProcesada;
}

function eliminarCamposEspecificosSinRegexYAlmacenar(cadena, camposAEliminar) {
  let resultado = cadena;
  let separador = "";
  let resultadosIntermedios = []; // Iniciamos el arreglo con la cadena original

  // Iteramos sobre cada campo a eliminar
  for (let i = 0; i < camposAEliminar.length; i++) {
    if (i > 1) {
      separador = "|";
    }
    const campo = camposAEliminar[i];
    // Mientras encontremos el campo en la cadena, lo eliminamos y almacenamos el resultado
    while (resultado.indexOf(campo) !== -1) {
      resultado = resultado.replace(campo, separador);
    }
  }

  let arregloDatos = [];
  arregloDatos = resultado.split("|");
  console.log(arregloDatos[0]);

  return {
    resultadoFinal: resultado.trim(),
    resultadosIntermedios,
  };
}

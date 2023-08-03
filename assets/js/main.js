const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválido", false);
    return;
  }
});

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");

  resultado.innerHTML = "";

  const p = createP();
  p.innerHTML = msg;

  resultado.appendChild(p);
}

const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); //impede o formulário de ser enviado

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const classImc = getClassImc(imc);

  const msg = `Seu IMC é ${imc} (${classImc})`;

  setResultado(msg, true);
});

function getClassImc(imc) {
  const classImc = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return classImc[5];
  if (imc >= 34.9) return classImc[4];
  if (imc >= 29.9) return classImc[3];
  if (imc >= 24.9) return classImc[2];
  if (imc >= 18.5) return classImc[1];
  if (imc < 18.5) return classImc[0];
}

// Função que calcula o IMC
function getImc(peso, altura) {
  return (peso / altura ** 2).toFixed(2);
}

// Função para criar os parágrafos.
function createP() {
  const p = document.createElement("p");
  return p;
}

//Função que adiciona o parágrafo a div de resultado com alguma mensagem.
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");

  resultado.innerHTML = "";

  const p = createP();

  if (isValid) {
    p.classList.add("valid");
  } else p.classList.add("invalid");

  p.innerHTML = msg;

  resultado.appendChild(p); //insere o parágrafo criado dentro do resultado
}

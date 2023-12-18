let listaDePacientes = [];
let menu;

do {
  menu = parseFloat(
    prompt(
      "Olá! Seja bem vindo ao consultorio!\n" +
        "1- Lista de Espera.\n" +
        "2- Adcionar seu nome a lista de espera.\n" +
        "3- Consultar paciente.\n" +
        "4- Sair"
    )
  );
  switch (menu) {
    case 1:
      let listaDeEspera = " ";
      for (let i = 0; i < listaDePacientes.length; i++) {
        listaDeEspera += i + "-" + listaDePacientes[i] + "\n";
      }
      alert("Lista de espera:\n\n" + listaDeEspera);
      break;
    case 2:
      listaDePacientes.push(prompt("Qual o seu nome?"));
      break;
    case 3:
      listaDePacientes.shift();
      break;
  }
} while (menu !== 4);

alert("Você saiu!");

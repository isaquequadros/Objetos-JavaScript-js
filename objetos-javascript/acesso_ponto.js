const cliente = {
  nome: "Renan",
  idade: 30,
  cpf: "1122233345",
  email: "renan@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
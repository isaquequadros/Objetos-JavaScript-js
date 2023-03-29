const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "Av. Pinhais",
    numero: 890,
    apartamento: true,
    complemento: "casa 1",
  },
];

cliente.enderecos.push({
  rua: "R. Argentina",
  numero: 205,
  apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);

const cliente = {
  nome: "Felipe",
  idade: 18,
  email: "Felipe@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "Av. Brasil",
    numero: 137,
    apartamento: true,
    complemento: "casa 3",
  },
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
}

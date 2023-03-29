const cliente = {
  nome: "anna",
  idade: 26,
  email: "anna@firma.com",
  telefone: ["11999988880", "1198756210"],
};

cliente.enderecos = [
  {
    rua: "R. Hungria",
    numero: 1800,
    apartamento: true,
    complemento: "ap 304",
  },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}

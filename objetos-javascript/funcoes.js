const cliente = {
  nome: "Will",
  idade: 24,
  email: "Will@firma.com",
  telefone: ["1177777770", "1199999990"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(25);

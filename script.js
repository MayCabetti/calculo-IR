let salarioBruto = parseFloat(prompt("Insira seu salário bruto mesnsal (R$): (ex: 15,000.00)"));
let imposto = 0;
let aliquota = "";

if (salarioBruto <= 5000.00) {
    imposto = 0;
    aliquota = "Isento";
} else if (salarioBruto <= 6500.00) {
    imposto = salarioBruto * 0.075;
    aliquota = "Aliquota de 7.5%";
} else if (salarioBruto <= 8000.00) {
    imposto = salarioBruto * 0.15;
    aliquota = "Aliquota de 15%";
} else if (salarioBruto <= 10000.00) {
    imposto = salarioBruto * 0.225;
    aliquota = "Aliquota de 22,5%";
} else {
    imposto = salarioBruto * 0.275;
    aliquota = "Aliquota de 27,5%";
}

let salarioLiquido = salarioBruto - imposto;

alert("------------------- Recibo do Pagamento -------------------");
alert(`Salário Bruto : R$ ${salarioBruto.toFixed(2)})
Aliquota aplicada: ${aliquota}
Valor desconto de IR: R$ ${imposto.toFixed(2)}
Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
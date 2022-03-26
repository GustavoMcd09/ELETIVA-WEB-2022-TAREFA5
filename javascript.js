var prods = [
    { id: 1, name: "Bife com Batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 },
];

function calc(){

    saida.innerHTML = '';
    var quantities = document.getElementsByName("quantity");
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    var texto = "Caro(a)";
    document.querySelector('#inicio').innerHTML = texto;

    var texto1 = document.querySelector('#name').value;
    document.querySelector('#saida').innerHTML = texto1;

    var texto2 = "Seguem os dados do seu pedido. <br><br> O seu Pedido é:";
    document.querySelector('#saida2').innerHTML = texto2;

    for (let input of quantities) {
        fim.innerHTML += `<br><li>Prato: ${prods[input.id-1].name} - Preço unitário: ${formatter.format(prods[input.id-1].price)} - Quantidade: ${input.value}`
    }

    //Mudar variaveis daqui pra baixo...*/
    var sum = [30, 25, 22, 10, 8, 12]
    var finalPrice = 0,
    quantSum = 0;

    for(i = 0 ; i < 6 ; i++){
        quant = document.getElementById(i + 1).value;

        if (quant != 0) {
            var totalPrice = sum[i] * quant;
            finalPrice += totalPrice;
            quantSum += quant
        }
    }
    calculo.innerHTML += "<br><br>Preço final R$ " + finalPrice + ",00";
}
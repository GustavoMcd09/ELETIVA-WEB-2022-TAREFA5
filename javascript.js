var prods = [
    { id: 1, name: "Bife com Batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 },
];

function calc(){
    end.innerHTML = '';
    calculation.innerHTML = '';


    var quantities = document.getElementsByName("quantity");
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });


    var text = "Caro(a) " + document.querySelector('#name').value;
    document.querySelector('#exit').innerHTML = text;

    var text1 = "Seguem os dados do seu pedido. <br><br> O seu Pedido é:";
    document.querySelector('#exit1').innerHTML = text1;


    for (let input of quantities) {
        end.innerHTML += `<br><li>Prato: ${prods[input.id-1].name} - Preço unitário: ${formatter.format(prods[input.id-1].price)} - Quantidade: ${input.value}`
    }


    var sum = [30, 25, 22, 10, 8, 12]
    var endPrice = 0,
    quantSum = 0;

    for(i = 0 ; i < 6 ; i++){
        quant = document.getElementById(i + 1).value;

        if (quant != 0) {
            var totalCost = sum[i] * quant;
            endPrice += totalCost;
            quantSum += quant;
        }
    }
    calculation.innerHTML += "<br><br>Preço final R$ " + endPrice + ",00";
}
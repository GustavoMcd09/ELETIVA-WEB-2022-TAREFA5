var prods = [
    { id: 1, name: "Bife com Batata", price: 29.99 },
    { id: 2, name: "Coxa de Frango Crocante", price: 24.99 },
    { id: 3, name: "Carne de Panela", price: 21.99 },
    { id: 4, name: "Farofa", price: 9.99 },
    { id: 5, name: "Salada", price: 7.99 },
    { id: 6, name: "Torresmo", price: 11.99 },
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

    var texto2 = "Seguem os dados do seu pedido. <br> O seu Pedido é:";
    document.querySelector('#saida2').innerHTML = texto2;

    for (let input of quantities) {
        fim.innerHTML += `<br>Prato: ${prods[input.id-1].name}  - Preço unitário: ${formatter.format(prods[input.id-1].price)} - Quantidade: ${input.value}`
    }
}
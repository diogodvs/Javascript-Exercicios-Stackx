/* Exercicio 1
*  Crie um algoritmo que leia o preço de um produto, 
*  calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.
*/


function calculoPrecoPromocional(){
    
    let preco = prompt("Insira o preco do Produto, utilizando o ponto no lugar da virgula: ")
    let novoPreco = preco * 0.95

    return alert(`O Valor Promocional é: ${novoPreco}`)
}

function aumentoSalarial(){
    let salario = prompt("insira seu salario atual, utilizando ponto no lugar da virgula: ")
    let novoSalario = salario * 1.15

    return alert(`Seu Novo Salario é: ${novoSalario}`)
}

function cuboDeUmNumero(){
    let numero = prompt("Insira um valor Inteiro: ")
    let cuboDoNumero = numero * numero * numero

    return alert(`o Cubo do numero é: ${cuboDoNumero}`)
}

function FahrenheitParaCelsius(){
    let tempFaren = prompt("Insira a temperatura em graus farenheit: ")
    let tempCelsius = (tempFaren - 32) * 5/9

    return alert(`Convertido fica ${tempCelsius} graus Celsius`)
}

function CelsiusParaFarenheit(){
    let tempC = prompt("Insira a temperatura em graus Celsius: ")
    let tempF = (tempC * (9/5)) + 32

    return alert(`Convertido fica ${tempF} graus Farenheit`)
}

function areaDoTriangulo(){
    let base = prompt("Insira a medida da base do Triangulo Retangulo: ")
    let altura = prompt("Insira a altura do Triangulo Retangulo: ")

    var area = ( base * altura ) /2
    return alert(`A area do triangulo é: ${area}`)
}

function CalculosDoCirculo(){
    let raio = prompt("Insira a medida do raio de um circulo: ")

    let perimetro = 2 * 3.14 * raio
    let areaCirculo = 3.14 * (raio *  raio)

    return alert(`A area do Circulo é: ${areaCirculo} e o seu perimetro: ${perimetro}`)
}

function MenorIdade(){
    let idade = prompt("Insira a sua Idade em anos completos: ")

    if (idade >= 18){
        return alert("Você é Maior de Idade!")
    } else {
        return alert("Você ainda é Menor de Idade!")
    }
}

function calculoIMC(){
    let peso = prompt("Insira seu peso, utilizando ponto no lugar da virgula: ")
    let alturaPessoa = prompt("Insira sua altura, tambem utilizando ponto no lugar da virgula:")

    let imc = peso / (alturaPessoa * alturaPessoa)

    return alert(`Seu IMC é: ${imc}`)
}

function volumeCilindro(){
    let raioCilindro = prompt("Insira a medida do raio de um cilindro: ")

    let alturaCilindro = prompt("Insira a medida da altura do cilindro: ")

    let volumeCilindro = 3.14 * (raioCilindro * raioCilindro) * alturaCilindro

    return alert(`O volume do cilindro é ${volumeCilindro}m³.`)
}
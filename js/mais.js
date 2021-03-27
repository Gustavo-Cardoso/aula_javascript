//Primeiro contato com JS

// var nome = "Gustavo Alves Cardoso";
// var idade = 21;
// var idade2 = 10;
// var frase = "Brasil é o melhor país do mundo";
// //alert(nome + " tem " + idade + " anos");
// //alert(idade + idade2);
// console.log(nome);                              //Console.Log mostra no navegador oque está acontecendo
// console.log(idade + idade2);
// console.log(frase.replace("Brasil", "USA"));
// //alert(frase.replace("Brasil", "USA"));        //Replace faz troca as palvras
// //alert(frase.toUpperCase("Brasil", "USA"));    //ToUpperCase deixa tudo maiúsculo
// //alert(frase.toLowerCase("Brasil", "USA"));    //ToLowerCase deixa tudo minúsculo

//Criação do Array

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");                                //Acrescenta a uva na lista
//lista.pop();                                      //Retira o último elemento
//console.log(lista.length);                        //O lenght conta a qtde do array
//console.log(lista.reverse);                       //Escreva a lista do final para o começo   

/*
console.log(lista.toString());                      //Escreve a lista com string comum (peder a referência de array)
//Exempos 
console.log(lista.toString()[0]);
console.log(lista[0]);
*/

//console.log(lista.join(" - "));                    //Substitui a "," por " - " e transforma em string

//Criação do Dicionário

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
*/

//Criação do Lista de Dicionários

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome);
*/

//Condionais e laços de repetição

/*
var idade = prompt("Qual a sua idade?")             //Prompt cria uma caixa de texto com interação

if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
};
*/

/*
for(count=0; count <=5; count++){
    console.log(count);
}
*/

//Data no JS

/*var d = new Date();
alert(d.getDay);                    //O getDay captura o dia
alert(d.getMonth() + 1);            //O getMonth captura o mês. Sempre começa em 0, então adicionar +1
alert(d.getSeconds());              //O getSeconds captura os segundos da hora atual
*/  

//Criando uma FUNCTION

/*
function soma(n1,n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18) {
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Informe a sua idade");
console.log(validaIdade(idade));
*/

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //Quano clicar no botão ele add no H3 essa frase
}

function redirecionar(){
    window.open("http://google.com"); //Adiciona no "p"" um link para outra pagina (abre em outra aba)
    //window.location.href = "http://google.com"; //Adiciona no "p" um link para outra pagina (abre na mesma aba)
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"; //Usano elemento.innerHTML não é necessário nenhum Id
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
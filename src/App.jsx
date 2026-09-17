
import './App.css'

function App() {

  function calcularPontos() {
     let vitorias = Number(prompt("número de vitorias:"));
     let empates = Number(prompt("número de empates:"));
     
     let pontos =vitorias *3 + empates ;
      
     alert("O teu time tem " + pontos + " pontos");
  }


  function trocarSapatos() {
    let par = Number(prompt("quantos pares de sapatos você tem?"));
    let precos = Number(prompt("qual o preço do par de sapatos?"));
    let trocas = par;
    let valorTotal = trocas * precos;

    alert("Voce tem " + trocas + " sapatos e o valor total é R$" + valorTotal.toFixed(2));



}

function calcularDevs() {
 let devclt = Number(prompt("quantos devs CLT vocr tem?"));
 let devpj = Number(prompt("quantos devs PJ voce tem?"));
 let devestagio = Number(prompt("quantos devs de estagio voce tem?"));
 let totaldevs = devclt + devpj + devestagio;

 alert("O total de devs é " + totaldevs); 

}
function quantidadedelaranjas (){



let laranjas = Number(prompt("quantas laranjas voce tem?"));
let laranjasvendidas = Number(prompt("quantas laranjas voce vendeu?"));
let laranjasrestantes = laranjas - laranjasvendidas;

alert("No final voce tem " + laranjasrestantes + " laranjas restantes");



}

function custosDaIgreja() {
let custos = Number(prompt("quais o custo da igreja?"));
let arrecadacao = Number(prompt("qual a arrecadação da igreja?"));
let saldo = arrecadacao - custos;

alert("O valor que restou/faltou é R$" + saldo.toFixed(2));


}
function calcularSalario() {
  let salariomes = Number(prompt('Digite o salário do mês:'))
  let diastrabalhados = Number(prompt('Digite a quantidade de dias trabalhados:'))
  let salariodiario = salariomes / 30
  alert('O salário diário é de: R$' + salariodiario.toFixed(2) + ' e o salário total do mês é de: R$' + (salariodiario * diastrabalhados).toFixed(2))
  let salariosemana = salariodiario * 5;
  alert('O salário semanal é de: R$' + salariosemana.toFixed(2))
}
function pesodetransporte() {
let PSB = Number(prompt("qual o peso total do transporte?"));
let tara = Number(prompt("qual o peso da tara?"));

let pesoLiquido = PSB - tara;
alert("O peso é: " + pesoLiquido + " kg");
}
function Usodecelular() {
  let n = Number(prompt("Qual o numero de uso de celular?"));
  let porc =  (0.1/(1+500*n))*100

  alert("A chance de uso de celular é: " + porc.toFixed(2) + "%");
}



  return (
    <div className="cont-app">
      <h1>Trampando com React</h1>
      
      <h2>Exercícios supimpas </h2>

       <button onClick={calcularPontos}>campeonato</button>
         <button onClick={trocarSapatos}> trocas pé pequeno</button>
           <button onClick={calcularDevs}>devs</button>
             <button onClick={quantidadedelaranjas}>calculo de laranjas</button>
               <button onClick={custosDaIgreja}>custos da igreja</button>
                  <button onClick={calcularSalario}>JUNIN</button>
                     <button onClick={pesodetransporte}>transporte</button>
                        <button onClick={Usodecelular}>celular</button>  

      <hr />
    </div>
  )
}
export default App

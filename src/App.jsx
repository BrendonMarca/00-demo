
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
function frete(){

let peso = Number(prompt("qual o peso do frete?"));
let distancia = Number(prompt("qual a distancia do frete?"));
let volume = Number(prompt("qual o volume do frete?"));

let total =15+(2*peso)+(0.05*distancia)+(10*volume)
  alert("O valor total do frete é: R$" + total.toFixed(2));

}
function Dona() {

  let bt = Number(prompt("qual o valor Bruto?"));
  let pp = Number(prompt("qual o valor de premiações e presentes ?"));
  let cs = Number(prompt("qual o valor das comissões?"));
  
  let lucro = bt - pp - cs;
  alert("O lucro da Dona é: R$" + lucro.toFixed(2));
}
function capitao() {
  let gasto = Number(prompt("Quanto foi gasto em suprimentos e mercadorias para operar seu navio;?")); 
  let fatura = Number(prompt("Quanto foi o faturamento em venda de ingressos?"));
  let fatuitens = Number(prompt("Quando foi o faturamento em venda de ítens?"));
  let lucro = fatura + fatuitens - gasto;
  let percentual = (lucro / gasto) * 100;

  alert("O lucro do capitão é: R$" + lucro.toFixed(2) + " e o percentual de lucro é: " + percentual.toFixed(2) + "%");

}

function Sarranosmanos() {
  let shows = Number(prompt("Quantos shows?"));
  let unidade = Number(prompt("Qual o valor por bomba?"));

  let quantidade = shows * 7;
  let total = quantidade * unidade;

  alert("Você precisa de " + quantidade + " bombas.");
  alert("O total é: R$ " + total.toFixed(2));
}
function mano22() {
  let salario = Number(prompt("Quanto ganhou?"));
  let despesas = Number(prompt("Quanto gastou com todas as despesas?"));
  let lucro = salario - despesas;

  alert("O só sobrou: R$" + lucro.toFixed(2));
}
function romero() {
  let valor = Number(prompt("Qual era o valor antes?"));
  let resposta = valor * 3;

  alert("O valor agora é: R$" + resposta)


}
function petshop() {
  let peso = Number(prompt("Quantos quilos?"));
  let valor = peso / 100;

  alert("O valor da ração é: R$" + valor.toFixed(2));
}
function calcularchurras(){
   let pessoas = Number(prompt("Quantas pessoas ao todo:"));
   let adultosCarne = Number(prompt("Quantos adultos comem carne:"));
   let criancasCarne = Number(prompt("Quantas crianças comem carne:"));
   let pessoascerveja = Number(prompt("quantas pessoas bebem cerveja:"))
   let pessoasCe = pessoascerveja
   let nivel = prompt("digite o nivel da sua compra \nleve\nmedio\nmonstro")
   let carne = ""
   let cerveja = ""
   let agua = ""
   let refri = ""
   let carvao = ""
   let sal = ""

   if(nivel == "leve"){
   carne = (adultosCarne * 0.5) + (criancasCarne * 0.25); 
   cerveja = pessoasCe*1
   agua = pessoas*0.5
   refri = pessoas*0.2
   carvao = pessoas*0.5
   sal = pessoas*0.25

   alert("o quantia final de tudo sera de\n"+carne+"KG de carne\n"+cerveja+"L de cerveja\n"+agua+"L de água\n"+refri+"L de refri\n"+carvao+"KG de carvão\n"+sal+"KG de sal")
   }
   else if(nivel == "medio"){
   carne = (adultosCarne * 1) + (criancasCarne * 0.5);
   cerveja = pessoasCe*2
   agua = pessoas*1
   refri = pessoas*0.5
   carvao = pessoas*1
   sal = pessoas*0.5

   alert("o quantia final de tudo sera de\n"+carne+"KG de carne\n"+cerveja+"L de cerveja\n"+agua+"L de água\n"+refri+"L de refri\n"+carvao+"KG de carvão\n"+sal+"KG de sal")
   }
   else if(nivel == "monstro"){
   carne = (adultosCarne * 2) + (criancasCarne * 1);
   cerveja = pessoasCe*4
   agua = pessoas*2
   refri = pessoas*1
   carvao = pessoas*2
   sal = pessoas*1

   alert("o quantia final de tudo sera de\n"+carne+"KG de carne\n"+cerveja+"L de cerveja\n"+agua+"L de água\n"+refri+"L de refri\n"+carvao+"KG de carvão\n"+sal+"KG de sal")
   }
    let racha = prompt("Deseja calcular o racha?\nsim\nnao");

    if(racha == "sim"){
        let valor = Number(prompt("Qual foi o valor total gasto?"));
        let pessoasRacha = Number(prompt("Quantas pessoas vao dividir?"));

        let valorI = valor / pessoasRacha;

        alert("Cada pessoa vai pagar R$" + valorI.toFixed(2));
    }
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
      <button onClick={frete}>frete</button>  
      <button onClick={Dona}>Judas</button>    
      <button onClick={capitao}>navio</button>
      <button onClick={Sarranosmanos}>shows</button>  
      <button onClick={mano22}>pespesas do mano</button>
      <button onClick={romero}>o romero</button>
      <button onClick={petshop}>os pet </button>
      <button onClick={calcularchurras}></button>
      <hr />
    </div>
  )
}
export default App

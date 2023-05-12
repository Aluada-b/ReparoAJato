//function abrir e fechar div no html


document.getElementById("home").style.display = "block";
document.getElementById("produtos").style.display = "none";
document.getElementById("quemSomos").style.display = "none";
document.getElementById("faleConosco").style.display = "none";
document.getElementById("cadastro").style.display = "none";


function handleClick1() {

    document.getElementById("produtos").style.display = "none";
    document.getElementById("quemSomos").style.display = "none";
    document.getElementById("faleConosco").style.display = "none";
    document.getElementById("cadastro").style.display = "none";


    let homeVis = document.getElementById('home');

    if (homeVis.style.display === 'none') {
        homeVis.style.display = 'block';


    } else {
        homeVis.style.display = 'block';
    }
}

document.getElementById("imgbox1").style.display = "none";


function handleClick2() {

    document.getElementById("home").style.display = "none";
    document.getElementById("quemSomos").style.display = "none";
    document.getElementById("faleConosco").style.display = "none";
    document.getElementById("cadastro").style.display = "none";


    let produtosVis = document.getElementById('produtos');

    if (produtosVis.style.display === 'none') {
        produtosVis.style.display = 'block';
    } else {
        produtosVis.style.display = 'block';

    }
}

function handleClick3() {

    document.getElementById("produtos").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("faleConosco").style.display = "none";
    document.getElementById("cadastro").style.display = "none";


    let quemSomosVis = document.getElementById('quemSomos');

    if (quemSomosVis.style.display === 'none') {
        quemSomosVis.style.display = 'block';
    } else {
        quemSomosVis.style.display = 'block';

    }
}

function handleClick4() {

    document.getElementById("produtos").style.display = "none";
    document.getElementById("quemSomos").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("cadastro").style.display = "none";


    let faleConoscoVis = document.getElementById('faleConosco');

    if (faleConoscoVis.style.display === 'none') {
        faleConoscoVis.style.display = 'block';
    } else {
        faleConoscoVis.style.display = 'block';

    }
}

function handleClick5() {

    document.getElementById("produtos").style.display = "none";
    document.getElementById("quemSomos").style.display = "none";
    document.getElementById("faleConosco").style.display = "none";
    document.getElementById("home").style.display = "none";


    let cadastroVis = document.getElementById('cadastro');

    if (cadastroVis.style.display === 'none') {
        cadastroVis.style.display = 'block';
    } else {
        cadastroVis.style.display = 'block';

    }
}


function calcular() {
    // Entrada
    var fiacao = parseInt(document.getElementById("e1").value);
    var fitas = parseInt(document.getElementById("e2").value);
    var luminarias = parseInt(document.getElementById("e3").value);
    var painel = parseInt(document.getElementById("e4").value);
    var reparos = parseInt(document.getElementById("e5").value);
    var bomba = parseInt(document.getElementById("h1").value);
    var hidraulica = parseInt(document.getElementById("h2").value);
    var encanamento = parseInt(document.getElementById("h3").value);
    var reparoh = parseInt(document.getElementById("h4").value);
    var tubulacao = parseInt(document.getElementById("h5").value);
    var lixar = parseInt(document.getElementById("p1").value);
    var fachada = parseInt(document.getElementById("p2").value);
    var pinturag = parseInt(document.getElementById("p3").value);
    var textura = parseInt(document.getElementById("p4").value);
    var chuveiro = parseInt(document.getElementById("g1").value);
    var gesso = parseInt(document.getElementById("g2").value);
    var moveis = parseInt(document.getElementById("g3").value);
    var lampada = parseInt(document.getElementById("g4").value);
    var torneira = parseInt(document.getElementById("g5").value);



    // Total por serviço
    var totalFiacao = fiacao * 1000;
    var totalFitas = fitas * 800;
    var totalLuminarias = luminarias * 600;
    var totalPainel = painel * 1100;
    var totalReparos = reparos * 500;
    var totalBomba = bomba * 5000;
    var totalHidraulica = hidraulica * 350;
    var totalEncanamento = encanamento * 400;
    var totalReparosH = reparoh * 500;
    var totalTubulacao = tubulacao * 2000;
    var totalLixar = lixar * 1600;
    var totalFachada = fachada * 1500;
    var totalPinturaG = pinturag * 120;
    var totalTextura = textura * 1500;
    var totalChuveiro = chuveiro * 150;
    var totalGesso = gesso * 200;
    var totalMoveis = moveis * 200;
    var totalLampada = lampada * 80;
    var totalTorneira = torneira * 150;



  
    // Att totais

    document.getElementById("totalFiacao").textContent = "R$" + totalFiacao.toFixed(2);
    document.getElementById("totalFitas").textContent = "R$" + totalFitas.toFixed(2);
    document.getElementById("totalLuminarias").textContent = "R$" + totalLuminarias.toFixed(2);
    document.getElementById("totalPainel").textContent = "R$" + totalPainel.toFixed(2);
    document.getElementById("totalReparos").textContent = "R$" + totalReparos.toFixed(2);
    document.getElementById("totalBomba").textContent = "R$" + totalBomba.toFixed(2);
    document.getElementById("totalHidraulica").textContent = "R$" + totalHidraulica.toFixed(2);
    document.getElementById("totalEncanamento").textContent = "R$" + totalEncanamento.toFixed(2);
    document.getElementById("totalReparosH").textContent = "R$" + totalReparosH.toFixed(2);
    document.getElementById("totalTubulacao").textContent = "R$" + totalTubulacao.toFixed(2);
    document.getElementById("totalLixar").textContent = "R$" + totalLixar.toFixed(2);
    document.getElementById("totalFachada").textContent = "R$" + totalFachada.toFixed(2);
    document.getElementById("totalPinturaG").textContent = "R$" + totalPinturaG.toFixed(2);
    document.getElementById("totalTextura").textContent = "R$" + totalTextura.toFixed(2);
    document.getElementById("totalChuveiro").textContent = "R$" + totalChuveiro.toFixed(2);
    document.getElementById("totalGesso").textContent = "R$" + totalGesso.toFixed(2);
    document.getElementById("totalMoveis").textContent = "R$" + totalMoveis.toFixed(2);
    document.getElementById("totalLampada").textContent = "R$" + totalLampada.toFixed(2);
    document.getElementById("totalTorneira").textContent = "R$" + totalTorneira.toFixed(2);




   
    // TotalG
    var totalGeral = totalTorneira + totalLampada + totalMoveis + totalChuveiro + totalGesso + totalFiacao + totalFitas+ totalLuminarias + totalPainel + totalReparos + totalBomba + totalHidraulica + totalEncanamento + totalReparosH + totalTubulacao + totalLixar + totalFachada + totalPinturaG + totalTextura;
  
    // Att TotalG
    document.getElementById("total").textContent = "R$" + totalGeral.toFixed(2);
  }

  
  function toggleDiv() {
    var div = document.getElementById("calculadora");
    var btn = document.getElementById("toggleBtn");
    var tabela = document.getElementById("tabela");
    if (div.style.display === "none") {
      div.style.display = "block";
      tabela.style.display = "none";
      btn.innerHTML = "Fechar Calculadora";
    } else {
      div.style.display = "none";
      tabela.style.display = "table";
      btn.innerHTML = "Calculadora de Serviços";
    }
  }
  

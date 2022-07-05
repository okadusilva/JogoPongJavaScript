//variaveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let bolinhanaoficapresa;

//variaveis de velocidade da bolinha
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;

//variaveis da raquete
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10
let raquetealtura = 90

//variaveis da raquete do coisinho
let xraqueteoponente = 585;
let yraqueteoponente = 150;
let veocidadeyoponente;

let colidiu = false;

//placar do jogo
let meuspontos = 0;
let pontosoponente = 0;

//sons do jogo
let paulada;
let ponto;
let trilha

function preload(){
  trilha = loadSound("musica.mp3");
  ponto = loadSound("errou.mp3");
  paulada = loadSound("bonk.mp3");
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisaoborda();
  mostraraquete(xraquete, yraquete);
  movimentaminharaquete();
  //verificacolisaoraquete();
  verificacolisaoraquete(xraquete, yraquete);
  mostraraquete(xraqueteoponente, yraqueteoponente);
  movimentaraqueteoponente();
  verificacolisaoraquete(xraqueteoponente, yraqueteoponente);
  incluiplacar();
  marcaponto();

}

function mostrabolinha(){

  circle(xbolinha, ybolinha, diametro);
}

function movimentabolinha(){
  
    xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}

function verificacolisaoborda(){
  
    if (xbolinha + raio > width || xbolinha - raio < 0){
    velocidadexbolinha *= -1;
  }  
  if (ybolinha + raio > height || ybolinha - raio < 0){
    velocidadeybolinha *= -1
  }
}

function mostraraquete(x,y){
  rect(x, y, raquetecomprimento, raquetealtura)
  
}

function movimentaminharaquete(){
    if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW))
    yraquete += 10; 
}

function verificacolisaoraquete(){
  if (xbolinha - raio < xraquete + raquetecomprimento
        && ybolinha - raio < yraquete + raquetealtura
        && ybolinha + raio > yraquete){
    velocidadexbolinha *= -1;
    paulada.play();
  }
  
}

function verificacolisaoraquete(x,y){
  colidiu =
  collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
  if (colidiu){
    velocidadexbolinha += -1
    paulada.play();
  }
  
}

function movimentaraqueteoponente(){
    if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW))
    yraquete += 10; 
  
}

function incluiplacar(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(130, 10, 40, 20);
  fill(255);
  text(meuspontos, 150, 26);
  fill(color(255, 140, 0));
  rect(430,10, 40, 20);
  fill(255);
  text(pontosoponente, 450, 26);
  
}

function marcaponto(){
    if (xbolinha > 590){
    meuspontos += 1;
      ponto.play();
  }
  if (xbolinha < 10){
    pontosoponente += 1;
    ponto.play();
}
  function bolinhanaoficapresa(){
  if (xbolinha - raio < 0){
    xbolinha = 23
  }
  
}
}










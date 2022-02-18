//------------------------------------------------------------------------------
// Minicurso - Verão 2022 - IMPA
// Ladrilhamentos do Plano: Representação Computacional e Visualização
// José Ezequiel Soto Sánchez
//------------------------------------------------------------------------------
// Mude apenas os valores destas variáveis para identificar o arquivo:
nome = "Enio Moreira";
email = "eniomoreirasilva@gmail.com";
// Não mude estas linhas:
document.getElementById("nome").appendChild(document.createTextNode(nome));
document.getElementById("sidebar").appendChild(document.createTextNode(email));
// Agora sim, crie seu código para desenhar seus ladrilhamentos:
//------------------------------------------------------------------------------
// A PRIMEIRA TAREFA CONSISTE EM MOSTRAR ALGUMAS REPRESENTAÇOES ISOMETRICAS NO PLANO

//--------------------------------------------------------------------------

var w = window.innerWidth;
var h = window.innerHeight;
var canvas = document.getElementById("meuCanvas");
var ctx = canvas.getContext('2d');
canvas.width = w;
canvas.height = h;
//canvas.style.background = "#ffff00";
console.log(w,h);

const PI = Math.PI;

function drawPoly(n){ // n = numero de lados
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(1,0);
    ctx.translate(1,0);
    for(let i=1;i<n;i++){
        ctx.rotate(2*PI/n);
        ctx.lineTo(1,0);
        ctx.translate(1,0);
    }
    ctx.stroke();
    ctx.restore();
}

let s = 70; // Muda a escala, pois o poligono e unitario
ctx.transform(s,0,0,-s,w/2,h/2); // Mutiplica a escala e leva a origem para o centro da tela
ctx.lineWidth = 3/s;  // muda a escala da caneta


let grid = 20;
let altura = Math.sqrt(3)/4;
console.log(altura);

let t1 = { x: 1 + Math.cos(2*PI/3), y: 0 + Math.sin(2*PI/3) };
let t2 = { x: 0, y: 2*Math.sin(2*PI/3) };

for (let i = -grid; i<=grid; i++){
    for (let j = -grid; j<grid+1; j++){
      ctx.save();
      //ctx.translate(i*t1.x, i*t1.y);
      ctx.translate(i*t1.x + j*t2.x, i*t1.y + j*t2.y);
      drawPoly(3);
      ctx.restore();
    }
}    

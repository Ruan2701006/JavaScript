switch (expressão) {
    case valor1:

    case valor2:

    default:
}

const dia = 3;
let diatexto;

switch (dia) {
    case 1:
        diatexto = "Domingo";
        break;
    case 2:
        diatexto = "Segunda-feira";
        break;
    case 3:
        diatexto = "Terça-feira";
        break;
    case 4:
        diatexto = "Quarta-feira";
        break;
    case 5:
        diatexto = "Quinta-feira";
        break;
    case 6:
        diatexto = "Sexta-feira";
        break;
    case 7:
        diatexto = "Sabado";
        break;
    default:
    diaTeexto = "Dia ínvalido"
}

console.log("hoje é " + diatexto);

const pontuacao = 75;
let mensagem;

switch(true)
{
    case (pontuacao >= 90):
    mensagem = "Parabéns, você é um gênio!"
    break;
    case (pontuacao >= 70):
    mensagem = "Você é bom, mas pode melhorar"
    break;
    case (pontuacao >= 50):
    mensagem = "Você precisa estudar mais"
    break;
    default:
}
console.log(mensagem);
//Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const P = new Pessoa('Ruan', 18);
P.apresentar();

//Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo.

class retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    area() {
        return this.largura * this.altura;
    }
    perimetro() {
        return (this.largura + this.altura) * 2;
    }
    apresentar() {
        console.log(`O retangulo tem ${this.largura} de largura e ${this.altura} de altura`);
    }
}
const ret = new retangulo(5, 10);
ret.apresentar();

//Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.
class ContaBancaria {
    constructor(conta, saldo, titular) {
        this.conta = conta;
        this.titular = titular
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    getSaldo() {
        return this.saldo;
    }
    apresentar() {
        console.log(`A conta ${this.conta} do titular ${this.titular} tem o saldo de ${this.saldo}`);
    }
}
const cont = new ContaBancaria('001', 90, 'Jão')
cont.apresentar();

//Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorTotal() {
        return this.preco * this.quantidade;
    }
    apresentar() {
        console.log(`O produto ${this.nome} tem o valor de ${this.preco} e a quantidade de ${this.quantidade}`);
    }
}
const prod = new Produto('Notebook', 2000, 1);
prod.apresentar();

//Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    apresentar() {
        console.log(`O carro ${this.marca} ${this.modelo} foi fabricado em ${this.ano}`);
    }
}
const car = new Carro('Ford', 'Fiesta', 2011);
car.apresentar();

//Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.

class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    calcularmedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
    apresentar() {
        console.log(`O aluno ${this.nome} tem a matricula ${this.matricula} e a media das notas é ${this.calcularmedia()}`);
    }

}
const aluno1 = new Aluno('Joao', 123, [9, 10, 7])
aluno1.apresentar();

//Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    apresentar() {
        console.log(`O animal ${this.nome} é do tipo ${this.tipo}`)
    }
}
const animal1 = new Animal('cachorro', 'Mamifero')
animal1.apresentar();

//Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    calculararea() {
        let p = (this.lado1 + this.lado2 + this.lado3) / 2;
        return Math.sqrt(p * (p - this.lado1) * (p - this.lado2) * (p - this.lado3));
    }
    calcularperimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
    apresentar() {
        console.log(`O triângulo tem área ${this.calculararea()} e perímetro ${this.calcularperimetro()}`)
    }
}
const triangulo1 = new Triangulo(3, 4, 5);
triangulo1.apresentar();

//Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    apresentar() {
        console.log(`O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}`)
    }
}
const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);
livro1.apresentar();

//Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.

class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calculararea() {
        return Math.PI * this.raio * this.raio;
    }
    calcularperimetro() {
        return 2 * Math.PI * this.raio;
    }
    apresentar() {
        console.log(`O círculo tem área ${this.calculararea()} e perímetro ${this.calcularperimetro()}`)
    }
}
const circulo1 = new Circulo(5,7);
circulo1.apresentar();
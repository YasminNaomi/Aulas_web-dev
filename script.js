/*const pessoas = ['Fulano', 'Beltrano', 'Ciclano']*/
/*
//adiciona um elemento ao final do array
pessoas.push('caio')

//Remove o ultimo elemento do array
pessoas.pop()

//Adiciona um elemento ao inicio do array
pessoas.unshift('caio')

//Remove o primeiro elemento do array
pessoas.shift()

//Atualizar um valor no array
//pessoas[1] = 'caio'



console.log (pessoas)*/
/*
for(i = 0; i <= 10; i ++){
    console.log(pessoas[i])
}
*/
/*
pessoas.forEach(
    function rodarArray (pessoas){
        console.log(pessoas.toLowerCase())//Colocar a primeira letra em minusculo
    }
);

pessoas.forEach( pessoas => console.log(pessoas.toLowerCase()))
*/
/*
function dobrar (array){
    return array.map(num => num * 2)
}
let resultado = dobrar([1, 2, 3])
console.log(dobrar(array))


pessoas.forEach(
    function rodarArray (pessoas){
        console.log(pessoas.toUpperCase())//Colocar a primeira letra em minusculo
    }
);
*/

/*const filmes = [{
    nome: 'Pulp Fiction', //sempre separado por virgula
    diretor: "tarantino",
    ano: 1994
}, {
    nome: 'carros',
    diretor: 'pixar',
    ano: 2006
}, {
    nome: 'Interstelar',
    diretor: 'Christopher Nolan',
    ano: 2014
}]

console.log(filmes[0].nome)// o '[0]' seleciona o item da lista. O ponto "pega" a propiedade do objeto
filmes.map(filme => console.log(filme.nome))*/
/*const Filmesmodificados =
filmes.filter(filme => filme.ano > 2000)/
console.log(Filmesmodificados)
*/
const media = 6.5
const alunos = [{
    nome: "Joao, nota: 9.5",
    nome: "Carlos, nota: 7.3", 
    nome: "Bianca, nota: 6.2",
}]
alunos.filter(alunos => alunos.nome > media)
console.log(alunos)
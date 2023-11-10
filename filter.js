//listas
//anonimas,callback

/* funcao que esta dentro de outra funcao
que tem como finalidade so liberar sua funcao
onde esta alocada quando ela se finalizar */

/*listaNumeros=[1,2,3,4,5];
listaPares=[];
function filtra_pares(lista,callback){
    for(i=0;i<lista.length;i++){
        if(callback(lista[i])){
            listaPares.push(lista[i]);
        }
    }
    return listaPares;
}


function pares(numero){
   return numero % 2 ==0
}

function impares(numero){
    return numero % 2 !=0
}

filtra_pares(listaNumeros,impares);
console.log(listaPares)
*/

listaNumeros=[1,2,3,4,5];
const listaPares=listaNumeros.filter(number => number % 2==0);
console.log(listaPares);

listaFrutas=["maca","melancia","mamao","maracuja","acerola","tomate","carambola","kiwi"];
const listaComLetraM=listaFrutas.filter(fruit => "m" == fruit[0]);
console.log(listaComLetraM);


//filtrem de uma lista de palavras,tais palavras que tenham mais que 5 letras

let listaPalavras=["amora","xau","tudo bem?","secreto","ola","truco!"];
listaFiltradaDePalavras=listaPalavras.filter(word => word.length>5)
console.log(listaFiltradaDePalavras)

listaNumerosNovos=[0,-1,40,-12,-90,8,9];
//filtrem a lista de forma que so me exiba os numeros positivos
const numerosPositivos=listaNumerosNovos.filter(numero => numero>0);
console.log(numerosPositivos)

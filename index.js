const minhaPromessa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=false;
        if(success){
            resolve("Ebba voce cumpriu com sua promessa");
        }else{
            reject("Nao prometa o que nao pode cumprir");
        }
    },3000);
});

minhaPromessa.then((mensagem)=>{
console.log("sucesso: "+mensagem)
}).catch((erro)=>{
console.log("Erro: "+erro)
});


console.log('testando');
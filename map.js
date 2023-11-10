listaPedras=["ametista","topazio",'carvao',"ruby","saphire","emerald"];
document.write('<ol>')
//template string
listaHtml=listaPedras.map(pedra=>`<li>${pedra}</li>`);
for(i=0;i<listaHtml.length;i++){
    document.write(listaHtml[i]);
} //index
document.write('</ol>')


listaCores=['yellow','blue','green'];

listaHtml=listaCores.map(cor =>  `<div style="background-color:'${cor}',height:'100px',width:'100px'"></div>` )
console.log(listaHtml)
for(i=0;i<listaHtml.length;i++){
    document.write(listaHtml[i])
}
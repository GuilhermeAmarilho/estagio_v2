let menosvazao = document.getElementById('menosvapor');
let maisvazao = document.getElementById('maisvapor');
let maisagua = document.getElementById('maisagua');
let maiscombustivel = document.getElementById('maiscombustivel');
let menoscombustivel = document.getElementById('menoscombustivel');
let inicializar = document.getElementById('inicializar');
let parar = document.getElementById('parar');
let alerta = document.querySelector('div.alerta');
let vazao = document.querySelector('div#vazao div');
let pressao = document.querySelector('div#pressao div');
let porcentagemagua = document.querySelector('div#nivelagua div');
let combustivel = document.querySelector('div#combustivel div');
let queima = document.querySelector('div#queima div');
maisvazao.addEventListener('click',function(){
    vazao.innerHTML = parseFloat(vazao.innerHTML) + 1000;
});
menosvazao.addEventListener('click',function(){
    if(vazao.innerHTML != '0'){
        vazao.innerHTML = parseFloat(vazao.innerHTML) - 1000;
    }
    if(vazao.innerHTML == '0'){
        finalizacao = 1;
    }
});
maisagua.addEventListener('click',function(){
        if((porcentagemagua.innerHTML!='100')&&(parseFloat(porcentagemagua.innerHTML)+10<=100)){
            porcentagemagua.innerHTML = parseFloat(porcentagemagua.innerHTML) + 10; 
        }
});
maiscombustivel.addEventListener('click',function(){
    combustivel.innerHTML = parseFloat(combustivel.innerHTML) + 100;
})
menoscombustivel.addEventListener('click',function(){
    if(parseFloat(combustivel.innerHTML)-100>=0){
        combustivel.innerHTML = parseFloat(combustivel.innerHTML) - 100;
    }
})
inicializar.addEventListener('click',iniciacao);
parar.addEventListener('click',function(){
    clearInterval(intervalo_inicializador);
    if(((parseFloat(combustivel.innerHTML) - ((v/3)/360000)) <= 0)){
        console.log('a')
        for(i=0;i<8;i++){
            document.body.removeChild(document.body.children[0]);
        }
        document.body.style.background = 'rgb(212, 211, 211)';
        alerta.style.left = '38%';
    }
});
function iniciacao(){
    intervalo_inicializador=setInterval(function(){
        var v = parseFloat(vazao.innerHTML);vs =  v/360000 ;  
        queima.innerhtml = v/3;
        if(((parseFloat(combustivel.innerHTML) - ((v/3)/360000)) > 0)&&((((parseFloat(porcentagemagua.innerHTML)*4000/100) - vs)*100/4000)>0)) {
            combustivel.innerHTML = parseFloat(combustivel.innerHTML) - ((v/3)/360000);
            porcentagemagua.innerHTML = ((parseFloat(porcentagemagua.innerHTML)*4000/100) - vs)*100/4000;
        }
        else{parar;}
    },10)
}
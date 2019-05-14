ponteiro = document.querySelector("div.hr");
cal = {
    pres : 0,
    comb : 0,
    agua : 4000,
    vasao: 0
};
function addpres(pres){
    cal.pres = pres;
};
function addagua(agua){
    cal.agua = agua;
};
function addvasao(vasao){
    cal.vasao = vasao;
};
function addcomb(comb){
    cal.comb = comb;
};
function verificaPressao(vasao,comb){
    pressao = comb/vasao;
    grau = pressao*12/(0.1);
    return grau;
}
function run(){
    vasao = document.getElementById("vasao").value;
    comb = document.getElementById("comb").value;
    if(vasao == 0){
        vasao = 1;
    }
    grau = verificaPressao(parseInt(vasao), parseInt(comb));
    ponteiro.style.transform = "rotate("+grau+"deg)";
}
function runa(){
    console.log('oi')
}
// setInterval(
    // run, 1);
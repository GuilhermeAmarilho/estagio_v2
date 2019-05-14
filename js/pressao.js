container = document.querySelector("div.gambiarra");
for (i = 0;i<360;i+=0.2){
    div = document.createElement('div');
    div.classList.add("box-fluid");
    hr = document.createElement('hr');
    hr.classList.add("color");
    if(i<120){
        hr.classList.add("great");
    }
    if((i>=120) && (i<225)){
        hr.classList.add("warning");
    }
    if(i>=210){
        hr.classList.add("danger");
    }
    if(i>=270){
        hr.classList.add("black");
    }
    div.appendChild(hr);
    div.style.transform = "rotate("+(i-45)+"deg)";
    container.appendChild(div);
}
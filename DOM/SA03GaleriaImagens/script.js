//galeria de imagens dinamicas -> DOM

let uploadInput = document.getElementById('upload');
let btnAdd = document.getElementById('addImagem');
let galeria = document.getElementById('galeria');
let carrossel = document.getElementById('carrossel');

//vetor das imagens
let imagens = [];

//adicionar imagens no vetor
btnAdd.addEventListener('click', () => {
    let imagemUrl = uploadInput.value.trim();
    if(imagemUrl === "") return;
    imagens.push(imagemUrl);
    atualizarGaleria();
    atualizarCarrossel();
    uploadInput.value = ""; //limpo o campo de input
});

//atualizarGaleria
function atualizarGaleria(){
    galeria.innerHTML = "";
    imagens.forEach(
        (imagens, index) => {
            let div = document.createElement('div');
            div.classList.add("imagemContainer");
            let img = document.createElement('img');
            img.src = imagem;
            let btnRemove = document.createElement("burron");
            btnRemove.innerText = "X";
            btnRemove.classList.add("remove");
            btnRemove.addEventListener("click",()=>{//remove a imagem do vetor
                imagens.splice(index,1);
                atualizarGaleria();//recursao
                atualizarCarrossel();
            });
            div.appendChild(img);
            div.appendChild(btnRemove);
            galeria.appendChild(div);
        }
    );
}

//atualizarCarrossel
function atualizarCarrossel(){
    carrossel.innerHTML = "";//limpa o carrosel
    imagens.forEach( imagm => {
        let img = document.createElement('img');
        img.src = imagm;
        img.style.width = "100%";//Galeria que a imagem ocupe toda a largura
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length * 100}%`;
    iniciarCarrossel(); //ucao para iniciar o carrossel
}

//fuction iniciarCarrossel()
function iniciarCarrossel(){
    let index = 0;
    setInterval(()=>{
        index = (index+1) % imagens.length;
        carrossel.style.transition = `tranform ${(1+imagens.length)/imagens.length}s ease-in-out`;//transição entre as imagens
        carrossel.style.transform = `translateX(-${index*100/imagens.length}%)`;//move corretamente o carrossel
    },2000);
}
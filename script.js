const video = ["assets/Alice in Borderland.mp4", "assets/Round 6.mp4", "assets/Massacre da Serra Elétrica.mp4", "assets/Babá.mp4"]
let indice = 0; // começa no primeiro vídeo
const player = document.getElementById("player")

//carregar no primeiro vídeo
player.src = video[indice];
// esse comando já dá o "play" automático.
player.play();

// addEventListener serve para "escutar" eventos.
// O evento "ended" acontece quando o vídeo chega ao fim.
// Então, quando o vídeo terminar, a função dentro das { } 
// será executada.
player.addEventListener("ended", function() {
    indice++; // vai para o próximo vídeo
    if (indice < video.length) {
        player.src = video[indice]; // troca o vídeo
        player.play(); // toca automaticamente
    }

    else {
        //  loop voltando pro primeiro video
        indice = 0;
        player.src = video[indice];
        player.play();
    }

})

const saudacao = document.getElementById("paragrafo_saudacao");
 function enviar () {
    const Inputnome = document.getElementById("input_name").value.trim();
if (Inputnome === "") {
    alert("Por favor digite um valor válido!");
    return;
}

else {
    saudacao.textContent = `Seja Bem-Vindo ${Inputnome}!`;
    document.getElementById("input_name").value = "";
    document.getElementById("input_name").remove();
    document.querySelector("button").remove();
}

alterar();

}

function alterar() {
    const mudar_nome = document.createElement("button");
    mudar_nome.className = "trocar_nome";
    mudar_nome.textContent = "Alterar Nome";
    const div_Alterar= document.querySelector(".alterar");
    div_Alterar.appendChild(mudar_nome);
    // const mudar_foto = document.createElement("");
    mudar_nome.onclick = () => renderizar_Nome();

}

function renderizar_Nome() {
    const nome = prompt("Alterar nome:");

    if (nome === null || nome.trim() === "" ) {
        return;

    }

    else {
          saudacao.textContent = `Seja Bem-Vindo ${nome}!`;
    }


}


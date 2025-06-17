// Definir Nome do Herói
let nomeDoHeroi = "Gladiador";
// Definir Experiência do Herói
let experiencia = 9550;
// Definir Nível do Herói com base na Experiência
let nivelHeroi;

// Lógica para determinar o nível do herói com base na experiência
if(experiencia < 1000) {
    nivelHeroi = "Ferro";
}
else if(experiencia >= 1001 && experiencia <= 2000) {
    nivelHeroi = "Bronze";
}
else if(experiencia >= 2001 && experiencia <= 5000) {
    nivelHeroi = "Prata";
}
else if(experiencia >= 5001 && experiencia <= 7000) {
    nivelHeroi = "Ouro";
}
else if(experiencia >= 7001 && experiencia <= 8000) {
    nivelHeroi = "PLatina";
}
else if(experiencia >= 8001 && experiencia <= 9000) {
    nivelHeroi = "Ascendente";
}
else if(experiencia >= 9001 && experiencia <= 10000) {
    nivelHeroi = "Imortal";
}
else if(experiência >= 10001) {
    nivelHeroi = "Radiante";
}
// Exibir o resultado
console.log("O herói " + nomeDoHeroi + " está no nível " + nivelHeroi + " com " + experiencia + " de experiência.");
//Pega os números inseridos
const N1 = document.getElementById('um');
const N2 = document.getElementById('dois');
const result = document.getElementById('resultado');


//Espera o click de cada operação para calcular e mostrar o resultado
document.getElementById('mais').addEventListener('click', function(){
    result.value = parseInt(N1.value)+parseInt(N2.value);
});

document.getElementById('menos').addEventListener('click', function(){
    result.value = parseInt(N1.value)-parseInt(N2.value);
});

document.getElementById('vezes').addEventListener('click', function(){
    result.value = parseInt(N1.value)*parseInt(N2.value);
});

document.getElementById('dividir').addEventListener('click', function(){
    result.value = parseInt(N1.value)/parseInt(N2.value);
});

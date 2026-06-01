const curiosidades = [
    "O solo armazena mais carbono do que a atmosfera e toda a vegetação terrestre juntas.",
    "A recuperação de áreas degradadas ajuda a aumentar o estoque de carbono no solo.",
    "O plantio direto reduz a erosão e melhora a conservação da matéria orgânica.",
    "Solos saudáveis produzem alimentos de melhor qualidade e ajudam o meio ambiente.",
    "A agricultura sustentável é uma das principais estratégias para reduzir gases de efeito estufa."
];

function mostrarCuriosidade() {
    const numero = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").innerHTML =
        curiosidades[numero];
}
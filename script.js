// Função para mudar o tamanho das fontes
document.getElementById("change-font-size").addEventListener("click", function() {
    let articles = document.querySelectorAll('article p, article h2');
    let currentSize = window.getComputedStyle(articles[0]).fontSize;
    let newSize = (parseInt(currentSize) + 2) + "px"; // Aumenta o tamanho da fonte em 2px

    articles.forEach(function(article) {
        article.style.fontSize = newSize;
    });
});

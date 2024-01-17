class Article {
    static author = "Ariston Rais";
    static publisher = "Gudang Literasi";

    static sum(a, b) {
        return a + b;
    }
}

const techArticle = new Article();
console.info(techArticle.author); // undefined
console.info(Article.author); // "Ariston Rais"


console.info(techArticle.publisher); // undefined
console.info(Article.publisher); // "Gudang Literasi"

// const result = techArticle.sum(3, 5); // type Error
const staticResult = Article.sum(3, 5); // 8
console.info(staticResult);
(function() {
    var headers = document.querySelector('.article-body').querySelectorAll('h1, h2, h3, h4');


    for (var i=0; i< headers.length; i++) {
        var id = headers[i].id


    }
    var article = document.querySelector('.article');
    article.addEventListener('scroll', onScroll);
    console.log(headers);
})();


function onScroll(e) {
    this.timeout;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function() {
        console.log('scroll');
    }, 200);
}